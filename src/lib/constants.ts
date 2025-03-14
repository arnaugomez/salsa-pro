import { DanceMove, Difficulty } from "./types";

export const SINGLE_MOVES: DanceMove[] = [
  {
    name: "Básico",
    mode: "single",
    audioFile: "single-basico.mp3",
    nextMoves: [
      "Mambo",
      "Lateral",
      "Cruzado por atrás",
      "Circula",
      "Vuelta izquierda",
      "Vuelta derecha",
      "Un fly",
    ],
  },
  {
    name: "Mambo",
    mode: "single",
    audioFile: "single-mambo.mp3",
    nextMoves: [
      "Básico",
      "Lateral",
      "Cruzado por atrás",
      "Circula",
      "Vuelta izquierda",
      "Vuelta derecha",
      "Un fly",
    ],
  },
  {
    name: "Lateral",
    mode: "single",
    audioFile: "single-lateral.mp3",
    nextMoves: [
      "Básico",
      "Mambo",
      "Cruzado por atrás",
      "Circula",
      "Vuelta izquierda",
      "Vuelta derecha",
      "Un fly",
    ],
  },
  {
    name: "Cruzado por atrás",
    mode: "single",
    audioFile: "single-cruzado.mp3",
    nextMoves: [
      "Básico",
      "Mambo",
      "Lateral",
      "Caminamos",
      "Circula",
      "Vuelta izquierda",
      "Vuelta derecha",
      "Un fly",
    ],
  },
  {
    name: "Caminamos",
    mode: "single",
    audioFile: "single-caminamos.mp3",
    nextMoves: [
      "Básico",
      "Mambo",
      "Lateral",
      "Cruzado por atrás",
      "Circula",
      "Vuelta izquierda",
      "Vuelta derecha",
      "Un fly",
    ],
  },
  {
    name: "Circula",
    mode: "single",
    audioFile: "single-circula.mp3",
    nextMoves: [
      "Básico",
      "Mambo",
      "Lateral",
      "Cruzado por atrás",
      "Vuelta izquierda",
      "Vuelta derecha",
      "Un fly",
    ],
  },
  {
    name: "Vuelta izquierda",
    mode: "single",
    audioFile: "single-vuelta-izq.mp3",
    nextMoves: [
      "Básico",
      "Mambo",
      "Lateral",
      "Cruzado por atrás",
      "Circula",
      "Vuelta derecha",
      "Un fly",
    ],
  },
  {
    name: "Vuelta derecha",
    mode: "single",
    audioFile: "single-vuelta-der.mp3",
    nextMoves: [
      "Básico",
      "Mambo",
      "Lateral",
      "Cruzado por atrás",
      "Circula",
      "Vuelta izquierda",
      "Un fly",
    ],
  },
  {
    name: "Un fly",
    mode: "single",
    audioFile: "single-un-fly.mp3",
    nextMoves: [
      "Básico",
      "Mambo",
      "Lateral",
      "Cruzado por atrás",
      "Circula",
      "Vuelta izquierda",
      "Vuelta derecha",
    ],
  },
];

export const COUPLE_MOVES: DanceMove[] = [
  {
    name: "Básico",
    mode: "couple",
    audioFile: "couple-basico.mp3",
    nextMoves: [
      "Caminamos",
      "Caminamos hacia adelante y cambio de pareja",
      "Abajo con salsa",
      "Dile que no",
      "Lateral",
    ],
  },
  {
    name: "Abajo con salsa",
    mode: "couple",
    audioFile: "couple-abajo.mp3",
    nextMoves: [
      "Básico",
      "Caminamos",
      "Caminamos hacia adelante y cambio de pareja",
      "Aspirina",
      "Dile que no",
      "Lateral",
    ],
  },
  {
    name: "Aspirina",
    mode: "couple",
    audioFile: "couple-aspirina.mp3",
    nextMoves: [
      "Básico",
      "Caminamos",
      "Caminamos hacia adelante y cambio de pareja",
      "Abajo con salsa",
      "Dile que no",
      "Lateral",
    ],
  },
  {
    name: "Lateral",
    mode: "couple",
    audioFile: "couple-lateral.mp3",
    nextMoves: [
      "Básico",
      "Caminamos",
      "Caminamos hacia adelante y cambio de pareja",
      "Abajo con salsa",
      "Dile que no",
    ],
  },
  {
    name: "Caminamos",
    mode: "couple",
    audioFile: "couple-caminamos.mp3",
    nextMoves: [
      "Básico",
      "Caminamos hacia adelante y cambio de pareja",
      "Abajo con salsa",
      "Dile que no",
      "Lateral",
    ],
  },
  {
    name: "Caminamos hacia adelante y cambio de pareja",
    mode: "couple",
    audioFile: "couple-caminamos-cambio.mp3",
    nextMoves: [
      "Básico",
      "Es broma",
      "Abajo con salsa",
      "Dile que no",
      "Lateral",
    ],
  },
  {
    name: "Es broma",
    mode: "couple",
    audioFile: "couple-es-broma.mp3",
    nextMoves: [
      "Básico",
      "Caminamos",
      "Caminamos hacia adelante y cambio de pareja",
      "Abajo con salsa",
      "Dile que no",
      "Lateral",
    ],
  },
  {
    name: "Dile que no",
    mode: "couple",
    audioFile: "couple-dile-que-no.mp3",
    nextMoves: ["Base cubana"],
  },
  {
    name: "Base cubana",
    mode: "couple",
    audioFile: "couple-base-cubana.mp3",
    nextMoves: ["Un fly", "Enxufla", "Cero"],
  },
  {
    name: "Un fly",
    mode: "couple",
    audioFile: "couple-un-fly.mp3",
    nextMoves: ["Base cubana", "Enxufla", "Cero"],
  },
  {
    name: "Enxufla",
    mode: "couple",
    audioFile: "couple-enxufla.mp3",
    nextMoves: [
      "Básico",
      "Caminamos",
      "Caminamos hacia adelante y cambio de pareja",
      "Abajo con salsa",
      "Dile que no",
      "Lateral",
    ],
  },
  {
    name: "Cero",
    mode: "couple",
    audioFile: "couple-cero.mp3",
    nextMoves: [
      "Básico",
      "Caminamos",
      "Caminamos hacia adelante y cambio de pareja",
      "Abajo con salsa",
      "Dile que no",
      "Lateral",
    ],
  },
];

export const DIFFICULTY_BEATS: Record<
  Difficulty,
  { min: number; max: number }
> = {
  easy: { min: 5, max: 10 },
  medium: { min: 4, max: 8 },
  hard: { min: 3, max: 6 },
};

export const EXAMPLE_PLAYLISTS = {
  youtube: "https://youtu.be/0Xg7jYzQd7g",
  spotify: "https://open.spotify.com/playlist/56KDNXPtjVNWRE86BnXJAQ",
};
