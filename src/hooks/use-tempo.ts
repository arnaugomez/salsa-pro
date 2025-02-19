import { useState, useEffect, useCallback } from "react";
import { setupAudioContext, detectBPM } from "@/lib/tempo-utils";

export function useTempo() {
  const [tempo, setTempo] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [cleanup, setCleanup] = useState<(() => void) | null>(null);

  const startListening = useCallback(async () => {
    try {
      setError(null);
      setIsListening(true);

      const [audioContext, source, analyser] = await setupAudioContext();

      // Set up periodic BPM detection
      const intervalId = setInterval(() => {
        const bpm = detectBPM(analyser);
        setTempo(bpm);
      }, 1000);

      // Store cleanup function
      setCleanup(() => () => {
        clearInterval(intervalId);
        audioContext.close();
        source.disconnect();
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to access microphone"
      );
      setIsListening(false);
    }
  }, []);

  const stopListening = useCallback(() => {
    if (cleanup) {
      cleanup();
      setCleanup(null);
    }
    setIsListening(false);
  }, [cleanup]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [cleanup]);

  return {
    tempo,
    error,
    isListening,
    startListening,
    stopListening,
  };
}
