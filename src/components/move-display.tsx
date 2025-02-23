import { useEffect, useState, useCallback, useRef } from "react";
import { DanceMove } from "@/lib/types";
import { SINGLE_MOVES, COUPLE_MOVES, DIFFICULTY_BEATS } from "@/lib/constants";

interface MoveDisplayProps {
  mode: "single" | "couple";
  difficulty: "easy" | "medium" | "hard";
  tempo: number;
  onMoveChange?: (move: DanceMove) => void;
}

export function MoveDisplay({
  mode,
  difficulty,
  tempo,
  onMoveChange,
}: MoveDisplayProps) {
  const moves = mode === "single" ? SINGLE_MOVES : COUPLE_MOVES;
  const [currentMove, setCurrentMove] = useState<DanceMove>(moves[0]);
  const effectRanRef = useRef(false);

  const getRandomMove = useCallback(() => {
    // Get the list of possible next moves based on the current move's nextMoves
    const possibleNextMoves = moves.filter((move) =>
      currentMove.nextMoves.includes(move.name)
    );

    const randomIndex = Math.floor(Math.random() * possibleNextMoves.length);
    return possibleNextMoves[randomIndex];
  }, [moves, currentMove]);

  useEffect(() => {
    // Guard against double execution in strict mode
    if (effectRanRef.current) return;
    effectRanRef.current = true;

    if (!tempo) return;

    // Function to calculate random interval
    const getRandomInterval = () => {
      const { min, max } = DIFFICULTY_BEATS[difficulty];
      const randomBeats = Math.floor(Math.random() * (max - min + 1)) + min;
      const msPerBeat = (60 / tempo) * 1000;
      return randomBeats * msPerBeat;
    };

    let timeoutId: NodeJS.Timeout;

    const scheduleNextMove = () => {
      const interval = getRandomInterval();
      console.log("New interval:", interval);

      timeoutId = setTimeout(() => {
        const newMove = getRandomMove();
        setCurrentMove(newMove);
        scheduleNextMove(); // Schedule next move with a new random interval
      }, interval);
    };

    scheduleNextMove(); // Start the cycle

    return () => {
      clearTimeout(timeoutId);
      effectRanRef.current = false;
    };
  }, [tempo, difficulty, mode, getRandomMove]);

  const effect2RanRef = useRef(false);

  useEffect(() => {
    if (effect2RanRef.current) return;
    effect2RanRef.current = true;

    onMoveChange?.(currentMove);
    return () => {
      effect2RanRef.current = false;
    };
  }, [currentMove, onMoveChange]);

  if (!currentMove) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600">Esperando la detección del tempo...</p>
      </div>
    );
  }

  return (
    <div className="text-center p-8 space-y-4">
      <h2 className="text-3xl font-bold text-gray-900 animate-fade-in">
        {currentMove.name}
      </h2>
    </div>
  );
}
