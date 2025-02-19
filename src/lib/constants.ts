import { DanceMove, Difficulty } from "./types";

export const SINGLE_MOVES: DanceMove[] = [
  { name: "Básico", mode: "single", audioFile: "single-basico.mp3" },
  { name: "Mambo", mode: "single", audioFile: "single-mambo.mp3" },
  { name: "Lateral", mode: "single", audioFile: "single-lateral.mp3" },
  {
    name: "Cruzado por atrás",
    mode: "single",
    audioFile: "single-cruzado.mp3",
  },
  { name: "Caminamos", mode: "single", audioFile: "single-caminamos.mp3" },
  { name: "Circula", mode: "single", audioFile: "single-circula.mp3" },
  {
    name: "Vuelta izquierda",
    mode: "single",
    audioFile: "single-vuelta-izq.mp3",
  },
  {
    name: "Vuelta derecha",
    mode: "single",
    audioFile: "single-vuelta-der.mp3",
  },
];

export const COUPLE_MOVES: DanceMove[] = [
  { name: "Básico", mode: "couple", audioFile: "couple-basico.mp3" },
  { name: "Abajo con salsa", mode: "couple", audioFile: "couple-abajo.mp3" },
  { name: "Aspirina", mode: "couple", audioFile: "couple-aspirina.mp3" },
];

export const DIFFICULTY_BEATS: Record<
  Difficulty,
  { min: number; max: number }
> = {
  easy: { min: 6, max: 12 },
  medium: { min: 4, max: 10 },
  hard: { min: 2, max: 8 },
};

export const EXAMPLE_PLAYLISTS = {
  youtube:
    "https://youtu.be/0Xg7jYzQd7g",
  spotify: "https://open.spotify.com/playlist/56KDNXPtjVNWRE86BnXJAQ",
};
