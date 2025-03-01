import { Button } from "@/components/ui/button";

export function MusicPrompt() {
  return (
    <div className="space-y-4 text-center">
      <p className="text-gray-600">
        Pon tu música de salsa favorita o prueba con esta playlist:
      </p>
      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=0Xg7jYzQd7g", "_blank")
          }
        >
          Playlist de Salsa
        </Button>
      </div>
    </div>
  );
}
