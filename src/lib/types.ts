export type DanceMode = "single" | "couple";
export type Difficulty = "easy" | "medium" | "hard";

export interface DanceMove {
  name: string;
  mode: DanceMode;
  audioFile: string;
  nextMoves: string[];
}

export interface DanceSession {
  mode: DanceMode;
  difficulty: Difficulty;
  currentMove?: DanceMove;
  isActive: boolean;
  tempo?: number;
}
