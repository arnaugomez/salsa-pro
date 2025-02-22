"use client";

import { useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DanceMode, Difficulty, DanceMove } from "@/lib/types";
import { MoveDisplay } from "@/components/move-display";
import { Button } from "@/components/ui/button";
import { TempoOption } from "@/app/page";

const TEMPO_VALUES: Record<TempoOption, number> = {
  slow: 60,
  medium: 100,
  fast: 120,
};

export default function DancePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Get mode, difficulty and tempo from URL params
  const mode = (searchParams.get("mode") as DanceMode) || "single";
  const difficulty = (searchParams.get("difficulty") as Difficulty) || "easy";
  const tempoOption = (searchParams.get("tempo") as TempoOption) || "medium";
  const tempo = TEMPO_VALUES[tempoOption];

  // Handle move changes to play audio
  const handleMoveChange = useCallback((move: DanceMove) => {
    // Stop previous audio if it's playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // Create and play new audio
    audioRef.current = new Audio(`/audio/${move.audioFile}`);
    audioRef.current.play().catch(console.error);
  }, []);

  // Handle end session
  const handleEndSession = () => {
    router.push("/thank-you");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 p-8">
      <div className="max-w-2xl mx-auto space-y-12">
        <MoveDisplay
          mode={mode}
          difficulty={difficulty}
          tempo={tempo}
          onMoveChange={handleMoveChange}
        />
        <div className="text-center">
          <Button variant="destructive" size="lg" onClick={handleEndSession}>
            End Session
          </Button>
        </div>
      </div>
    </main>
  );
}
