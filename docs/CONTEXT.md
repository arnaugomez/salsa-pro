# Salsa Dance Practice App - Project Context

## Overview

A Next.js application to help users practice salsa dancing by detecting music tempo and providing random dance move prompts with audio instructions.

## Tech Stack

- Next.js 14+ (App Router)
- React
- TypeScript
- shadcn/ui for UI components
- Web Audio API for tempo detection
- OpenAI Whisper API for audio generation

## Screens and Features

### 1. Welcome Screen (`/`)

- Clean, centered layout with salsa-themed design
- Mode selection (radio buttons): Single / Couple
- Difficulty selection (radio buttons): Easy / Medium / Hard
- Start button
- All UI components from shadcn/ui
- State management using React useState

### 2. Dance Screen (`/dance`)

- Main practice interface
- Components:
  - Music prompt section
    - Instructions to play music
    - Links to YouTube/Spotify playlists
  - Tempo detection section
    - Uses Web Audio API
    - Microphone access handling
    - Real-time BPM calculation
  - Dance move display
    - Large, centered text
    - Animated transitions
  - End session button
- Audio playback system for instructor voices
- Timing system based on detected tempo
- Move selection logic:
  - Beat intervals:
    - Easy: 32-48 beats
    - Medium: 16-32 beats
    - Hard: 8-16 beats

### 3. Thank You Screen (`/thank-you`)

- Celebration message
- Share button (copy link to clipboard) -> show toast with shadcn/ui toast (sonner) component
- "Dance Again" button (routes to welcome screen)

## Project Structure

```
src/
├── app/
│ ├── page.tsx # Welcome screen
│ ├── dance/
│ │ └── page.tsx # Dance screen
│ ├── thank-you/
│ │ └── page.tsx # Thank you screen
│ └── layout.tsx # Root layout
├── components/
│ ├── mode-selector.tsx # Dance mode selection
│ ├── difficulty-selector.tsx # Difficulty selection
│ ├── tempo-detector.tsx # Audio analysis
│ ├── move-display.tsx # Dance move display
│ ├── music-prompt.tsx # Music instructions
│ └── ui/ # shadcn components
├── lib/
│ ├── constants.ts # App constants
│ ├── moves.ts # Dance moves data
│ ├── tempo-utils.ts # Tempo detection logic
│ └── types.ts # TypeScript types
├── hooks/
│ ├── use-tempo.ts # Tempo detection hook
│ └── use-dance-moves.ts # Move selection logic
└── styles/
└── globals.css # Global styles
```

## Types

```typescript
type DanceMode = "single" | "couple";
type Difficulty = "easy" | "medium" | "hard";
interface DanceMove {
  name: string;
  mode: DanceMode;
  audioFile: string;
}
interface DanceSession {
  mode: DanceMode;
  difficulty: Difficulty;
  currentMove?: DanceMove;
  isActive: boolean;
  tempo?: number;
}
```
