"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DanceMode, Difficulty } from "@/lib/types";
import { ModeSelector } from "@/components/mode-selector";
import { DifficultySelector } from "@/components/difficulty-selector";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  const router = useRouter();
  const [mode, setMode] = useState<DanceMode>("single");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  const handleStart = () => {
    router.push(`/dance?mode=${mode}&difficulty=${difficulty}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Salsa Practice</h1>
          <p className="text-gray-600">
            Select your dance mode and difficulty to begin
          </p>
        </div>

        <div className="space-y-6">
          <ModeSelector value={mode} onChange={setMode} />
          <DifficultySelector value={difficulty} onChange={setDifficulty} />

          <Button onClick={handleStart} className="w-full" size="lg">
            Start Dancing
          </Button>
        </div>
      </div>
    </main>
  );
}
