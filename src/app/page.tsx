"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DanceMode, Difficulty } from "@/lib/types";
import { ModeSelector } from "@/components/mode-selector";
import { DifficultySelector } from "@/components/difficulty-selector";
import { Button } from "@/components/ui/button";

export type TempoOption = "slow" | "medium" | "fast";

export default function WelcomePage() {
  const router = useRouter();
  const [mode, setMode] = useState<DanceMode>("single");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [tempo, setTempo] = useState<TempoOption>("medium");

  const handleStart = () => {
    router.push(`/dance?mode=${mode}&difficulty=${difficulty}&tempo=${tempo}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Práctica de Salsa
          </h1>
          <p className="text-gray-600">
            Selecciona tu modo de baile, dificultad y tempo para comenzar
          </p>
        </div>

        <div className="space-y-6">
          <ModeSelector value={mode} onChange={setMode} />
          <DifficultySelector value={difficulty} onChange={setDifficulty} />

          <div className="space-y-3">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Tempo
            </label>
            <select
              value={tempo}
              onChange={(e) => setTempo(e.target.value as TempoOption)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="slow">Lento (60 BPM)</option>
              <option value="medium">Medio (100 BPM)</option>
              <option value="fast">Rápido (120 BPM)</option>
            </select>
          </div>

          <Button onClick={handleStart} className="w-full" size="lg">
            Empezar a Bailar
          </Button>
        </div>
      </div>
    </main>
  );
}
