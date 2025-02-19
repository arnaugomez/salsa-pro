import { Button } from "@/components/ui/button";
import { EXAMPLE_PLAYLISTS } from "@/lib/constants";

export function MusicPrompt() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-semibold">Play Some Salsa Music</h2>
      <p className="text-gray-600">
        Play your favorite salsa music or try one of these playlists:
      </p>
      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          onClick={() => window.open(EXAMPLE_PLAYLISTS.youtube, "_blank")}
        >
          YouTube Playlist
        </Button>
        <Button
          variant="outline"
          onClick={() => window.open(EXAMPLE_PLAYLISTS.spotify, "_blank")}
        >
          Spotify Playlist
        </Button>
      </div>
    </div>
  );
}
