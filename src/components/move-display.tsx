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
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  }, [moves]);

  useEffect(() => {
    if (!tempo) return;

    // Calculate interval based on difficulty and tempo
    const { min, max } = DIFFICULTY_BEATS[difficulty];
    const randomBeats = Math.floor(Math.random() * (max - min + 1)) + min;
    const msPerBeat = (60 / tempo) * 1000;
    const interval = randomBeats * msPerBeat;
    console.log("Interval:", interval); 

    // Set initial move
    const initialMove = getRandomMove();
    setCurrentMove(initialMove);
    onMoveChange?.(initialMove);

    // Set up interval for move changes
    const intervalId = setInterval(() => {
      const newMove = getRandomMove();
      setCurrentMove(newMove);
      onMoveChange?.(newMove);
    }, interval);

    return () => clearInterval(intervalId);
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
