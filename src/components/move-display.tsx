import { useEffect, useState, useCallback } from "react";
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
  const [currentMove, setCurrentMove] = useState<DanceMove | null>(null);
  const moves = mode === "single" ? SINGLE_MOVES : COUPLE_MOVES;

  const getRandomMove = useCallback(() => {
    if (!currentMove) {
      // If there's no current move, pick a random one from all available moves
      const randomIndex = Math.floor(Math.random() * moves.length);
      return moves[randomIndex];
    }

    // Get the list of possible next moves based on the current move's nextMoves
    const possibleNextMoves = moves.filter((move) =>
      currentMove.nextMoves.includes(move.name)
    );

    const randomIndex = Math.floor(Math.random() * possibleNextMoves.length);
    return possibleNextMoves[randomIndex];
  }, [moves, currentMove]);

  useEffect(() => {
    if (!tempo) return;

    // Function to calculate random interval
    const getRandomInterval = () => {
      const { min, max } = DIFFICULTY_BEATS[difficulty];
      const randomBeats = Math.floor(Math.random() * (max - min + 1)) + min;
      const msPerBeat = (60 / tempo) * 1000;
      return randomBeats * msPerBeat;
    };

    // Set initial move and interval
    const initialMove = getRandomMove();
    setCurrentMove(initialMove);
    onMoveChange?.(initialMove);
    let timeoutId: NodeJS.Timeout;

    const scheduleNextMove = () => {
      const interval = getRandomInterval();
      console.log("New interval:", interval);

      timeoutId = setTimeout(() => {
        const newMove = getRandomMove();
        setCurrentMove(newMove);
        onMoveChange?.(newMove);
        scheduleNextMove(); // Schedule next move with a new random interval
      }, interval);
    };

    scheduleNextMove(); // Start the cycle

    return () => clearTimeout(timeoutId);
  }, [tempo, difficulty, mode, onMoveChange, getRandomMove]);

  if (!currentMove) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600">Waiting for tempo detection...</p>
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
