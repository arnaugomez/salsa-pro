import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { SINGLE_MOVES, COUPLE_MOVES } from "../src/lib/constants";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to generate audio for a move
async function generateAudio(
  moveName: string,
  mode: string,
  outputPath: string
) {
  // Skip if file already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️ Skipping existing audio for ${mode} - ${moveName}`);
    return;
  }

  try {
    const prompt = `¡${moveName}!`;

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: prompt,
      speed: 1,
      response_format: "mp3",
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);

    console.log(`✅ Generated audio for ${mode} - ${moveName}`);
  } catch (error) {
    console.error(
      `❌ Failed to generate audio for ${mode} - ${moveName}:`,
      error
    );
  }
}

async function main() {
  // Create audio directory if it doesn't exist
  const audioDir = path.join(process.cwd(), "public", "audio");
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  // Generate audio for single moves
  for (const move of SINGLE_MOVES) {
    await generateAudio(
      move.name,
      "single",
      path.join(audioDir, move.audioFile)
    );
  }

  // Generate audio for couple moves
  for (const move of COUPLE_MOVES) {
    await generateAudio(
      move.name,
      "couple",
      path.join(audioDir, move.audioFile)
    );
  }

  console.log("🎉 Audio generation complete!");
}

// Check for OpenAI API key
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY environment variable is required");
  process.exit(1);
}

main().catch(console.error);
