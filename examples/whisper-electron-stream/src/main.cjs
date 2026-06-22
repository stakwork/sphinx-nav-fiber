const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { app, BrowserWindow, ipcMain } = require("electron");

const { resolveChunkMs } = require("./chunking.cjs");
const { createTranscriber } = require("./transcriber.cjs");
const { writeWavPcm16 } = require("./wav.cjs");

const config = {
  chunkMs: resolveChunkMs(process.env.WHISPER_CHUNK_MS),
  keepChunks: process.env.WHISPER_KEEP_CHUNKS === "1",
  language: process.env.WHISPER_LANGUAGE || "en",
  mock: process.env.WHISPER_MOCK === "1",
  modelPath: process.env.WHISPER_MODEL || ""
};

const chunkDir = path.join(app.getPath("userData"), "recordings");
const transcriber = createTranscriber(config);
let windowRef = null;
let transcriptionQueue = Promise.resolve();

function createWindow() {
  windowRef = new BrowserWindow({
    width: 980,
    height: 720,
    minWidth: 720,
    minHeight: 520,
    backgroundColor: "#101315",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.cjs")
    }
  });

  windowRef.loadFile(path.join(__dirname, "index.html"));
}

function enqueueTranscription(task) {
  const run = transcriptionQueue.then(task, task);
  transcriptionQueue = run.catch(() => {});
  return run;
}

async function transcribeChunk(payload) {
  const samples = new Float32Array(payload.samples);
  const sequence = Number(payload.sequence) || 0;
  const sampleRate = Number(payload.sampleRate) || 48000;
  const durationMs = Math.round((samples.length / sampleRate) * 1000);

  if (durationMs > config.chunkMs + 25) {
    throw new Error(`Chunk ${sequence} is ${durationMs} ms, above configured cap ${config.chunkMs} ms`);
  }

  fs.mkdirSync(chunkDir, { recursive: true });
  const wavPath = path.join(chunkDir, `chunk-${String(sequence).padStart(5, "0")}.wav`);
  writeWavPcm16(wavPath, samples, sampleRate);

  const result = await transcriber.transcribe(wavPath, {
    durationMs,
    sampleRate,
    sequence
  });

  if (!config.keepChunks) {
    fs.rm(wavPath, { force: true }, () => {});
  }

  return {
    ...result,
    durationMs,
    sampleRate,
    sequence
  };
}

app.whenReady().then(() => {
  ipcMain.handle("config:get", () => ({
    chunkMs: config.chunkMs,
    language: config.language,
    mock: config.mock,
    hasModel: Boolean(config.modelPath),
    platform: os.platform()
  }));

  ipcMain.handle("audio:chunk", (_event, payload) => (
    enqueueTranscription(() => transcribeChunk(payload))
  ));

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

