"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DanceMode, Difficulty, DanceMove } from "@/lib/types";
import { MusicPrompt } from "@/components/music-prompt";
import { TempoDetector } from "@/components/tempo-detector";
import { MoveDisplay } from "@/components/move-display";
import { Button } from "@/components/ui/button";

export default function DancePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tempo, setTempo] = useState<number | null>(null);

  // Get mode and difficulty from URL params
  const mode = (searchParams.get("mode") as DanceMode) || "single";
  const difficulty = (searchParams.get("difficulty") as Difficulty) || "easy";

  // Handle move changes to play audio
  const handleMoveChange = useCallback((move: DanceMove) => {
    const audio = new Audio(`/audio/${move.audioFile}`);
    audio.play().catch(console.error);
  }, []);

  // Handle end session
  const handleEndSession = () => {
    router.push("/thank-you");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 p-8">
      <div className="max-w-2xl mx-auto space-y-12">
        {!tempo ? (
          <>
            <MusicPrompt />
            <TempoDetector onTempoDetected={setTempo} />
          </>
        ) : (
          <>
            <MoveDisplay
              mode={mode}
              difficulty={difficulty}
              tempo={tempo}
              onMoveChange={handleMoveChange}
            />
            <div className="text-center">
              <Button
                variant="destructive"
                size="lg"
                onClick={handleEndSession}
              >
                End Session
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
