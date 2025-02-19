# Salsa Dance Practice App 💃🕺

A Next.js application to help users practice salsa dancing by detecting music tempo and providing random dance move prompts with audio instructions.

## Features

- 🎵 Real-time music tempo detection using Web Audio API
- 🔄 Random dance move prompts based on tempo
- 🗣️ Audio instructions for each move
- 👥 Single and couple dance modes
- 🎚️ Multiple difficulty levels
- 📱 Mobile-responsive design

## Prerequisites

- Node.js 18+ and npm
- OpenAI API key (for generating audio instructions)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/salsa-pro.git
cd salsa-pro
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```

4. Generate audio instructions:

```bash
npm run generate-audio
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Select your dance mode (Single/Couple) and difficulty level (Easy/Medium/Hard).
2. Click "Start Dancing" to begin.
3. Play some salsa music (links to playlists are provided).
4. Allow microphone access for tempo detection.
5. Follow the dance move prompts that change according to the music tempo.
6. Click "End Session" when you're done.

## Difficulty Levels

- Easy: Move changes every 32-48 beats
- Medium: Move changes every 16-32 beats
- Hard: Move changes every 8-16 beats

## Available Dance Moves

### Single Mode

- Básico
- Mambo
- Lateral
- Cruzado por atrás
- Caminamos
- Circula
- Vuelta izquierda
- Vuelta derecha

### Couple Mode

- Básico
- Abajo con salsa
- Aspirina

## Tech Stack

- Next.js 14+
- React
- TypeScript
- shadcn/ui
- Web Audio API
- OpenAI Whisper API
- Tailwind CSS

## Contributing

Feel free to submit issues and pull requests.

## License

MIT
