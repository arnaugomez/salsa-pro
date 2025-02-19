export async function setupAudioContext(): Promise<
  [AudioContext, MediaStreamAudioSourceNode, AnalyserNode]
> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  const analyser = audioContext.createAnalyser();

  analyser.fftSize = 2048;
  source.connect(analyser);

  return [audioContext, source, analyser];
}

export function detectBPM(analyser: AnalyserNode): number {
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteTimeDomainData(dataArray);

  // Simple peak detection
  let peaks = 0;
  let lastPeak = 0;
  const threshold = 128 + 20; // Above middle (128) plus threshold

  for (let i = 1; i < bufferLength - 1; i++) {
    if (
      dataArray[i] > threshold &&
      dataArray[i] > dataArray[i - 1] &&
      dataArray[i] > dataArray[i + 1]
    ) {
      const timeSinceLastPeak = i - lastPeak;
      if (timeSinceLastPeak > 20) {
        // Minimum time between peaks
        peaks++;
        lastPeak = i;
      }
    }
  }

  // Calculate BPM based on peaks and sample rate
  const sampleRate = 44100; // Standard sample rate
  const secondsOfData = bufferLength / sampleRate;
  const bpm = (peaks * 60) / secondsOfData;

  // Return a reasonable BPM range for salsa (60-120)
  return Math.max(60, Math.min(120, Math.round(bpm)));
}
