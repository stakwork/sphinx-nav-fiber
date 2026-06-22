const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const { resolveChunkMs } = require("../src/chunking.cjs");
const { createTranscriber } = require("../src/transcriber.cjs");
const { writeWavPcm16 } = require("../src/wav.cjs");

async function main() {
  assert.equal(resolveChunkMs(10000), 5000);
  assert.equal(resolveChunkMs("4500"), 4500);
  assert.equal(resolveChunkMs("bad"), 5000);
  assert.equal(resolveChunkMs(1), 250);

  const sampleRate = 16000;
  const samples = new Float32Array(sampleRate);
  for (let i = 0; i < samples.length; i += 1) {
    samples[i] = Math.sin((2 * Math.PI * 440 * i) / sampleRate) * 0.2;
  }

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "whisper-electron-smoke-"));
  const wavPath = path.join(tmpDir, "chunk.wav");
  writeWavPcm16(wavPath, samples, sampleRate);

  const header = fs.readFileSync(wavPath).subarray(0, 44);
  assert.equal(header.toString("ascii", 0, 4), "RIFF");
  assert.equal(header.toString("ascii", 8, 12), "WAVE");
  assert.equal(header.readUInt32LE(24), sampleRate);

  const transcriber = createTranscriber({ mock: true, language: "en" });
  const result = await transcriber.transcribe(wavPath, { durationMs: 1000, sequence: 1 });
  assert.match(result.text, /mock transcript/);
  assert.equal(result.sequence, 1);

  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.log("Smoke check passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

