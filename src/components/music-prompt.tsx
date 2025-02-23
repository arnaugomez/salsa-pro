import { Button } from "@/components/ui/button";
import { EXAMPLE_PLAYLISTS } from "@/lib/constants";

export function MusicPrompt() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-semibold">Pon Música de Salsa</h2>
      <p className="text-gray-600">
        Pon tu música de salsa favorita o prueba una de estas listas de
        reproducción:
      </p>
      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          onClick={() => window.open(EXAMPLE_PLAYLISTS.youtube, "_blank")}
        >
          Lista de YouTube
        </Button>
        <Button
          variant="outline"
          onClick={() => window.open(EXAMPLE_PLAYLISTS.spotify, "_blank")}
        >
          Lista de Spotify
        </Button>
      </div>
    </div>
  );
}
