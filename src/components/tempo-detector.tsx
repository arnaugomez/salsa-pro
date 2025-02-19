import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTempo } from "@/hooks/use-tempo";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TempoDetectorProps {
  onTempoDetected: (tempo: number) => void;
}

export function TempoDetector({ onTempoDetected }: TempoDetectorProps) {
  const { tempo, error, isListening, startListening, stopListening } =
    useTempo();

  // Update parent when tempo is detected
  useEffect(() => {
    if (tempo && isListening) {
      console.log("Tempo detected:", tempo);
      onTempoDetected(tempo);
    }
  }, [tempo, isListening, onTempoDetected]);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Tempo Detection</h3>
        <p className="text-gray-600 mb-4">
          {isListening
            ? "Listening to music..."
            : "Click the button below to detect the music tempo"}
        </p>

        <Button
          onClick={isListening ? stopListening : startListening}
          variant={isListening ? "destructive" : "default"}
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </Button>
      </div>

      {tempo && (
        <div className="text-center">
          <p className="text-2xl font-bold">
            {tempo} <span className="text-sm text-gray-600">BPM</span>
          </p>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
