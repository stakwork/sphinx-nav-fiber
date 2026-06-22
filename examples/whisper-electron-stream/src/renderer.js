const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const statusEl = document.getElementById("status");
const transcriptList = document.getElementById("transcriptList");
const levelBar = document.getElementById("levelBar");

let audioContext = null;
let sourceNode = null;
let workletNode = null;
let mediaStream = null;
let chunkSamples = [];
let bufferedSampleCount = 0;
let samplesPerChunk = 0;
let sequence = 0;
let running = false;
let config = null;

function setStatus(value) {
  statusEl.textContent = value;
}

function setLevel(samples) {
  let peak = 0;
  for (let i = 0; i < samples.length; i += 1) {
    peak = Math.max(peak, Math.abs(samples[i]));
  }
  levelBar.style.transform = `scaleX(${Math.min(1, peak * 8)})`;
}

function takeSamples(size) {
  const out = new Float32Array(size);
  let offset = 0;

  while (offset < size && chunkSamples.length > 0) {
    const current = chunkSamples[0];
    const needed = size - offset;

    if (current.length <= needed) {
      out.set(current, offset);
      offset += current.length;
      chunkSamples.shift();
      bufferedSampleCount -= current.length;
    } else {
      out.set(current.subarray(0, needed), offset);
      chunkSamples[0] = current.subarray(needed);
      offset += needed;
      bufferedSampleCount -= needed;
    }
  }

  return out;
}

async function submitChunk(samples) {
  const currentSequence = sequence;
  sequence += 1;

  addTranscript(currentSequence, "Transcribing...");
  try {
    const response = await window.whisperStream.transcribeChunk(samples.buffer, {
      sampleRate: audioContext.sampleRate,
      sequence: currentSequence
    });
    updateTranscript(currentSequence, response.text || "(no speech)", response.durationMs);
  } catch (error) {
    updateTranscript(currentSequence, error.message || String(error), 0, true);
  }
}

function appendSamples(samples) {
  if (!running) {
    return;
  }

  chunkSamples.push(samples);
  bufferedSampleCount += samples.length;
  setLevel(samples);

  while (bufferedSampleCount >= samplesPerChunk) {
    submitChunk(takeSamples(samplesPerChunk));
  }
}

function addTranscript(id, text) {
  const item = document.createElement("li");
  item.dataset.sequence = String(id);
  item.innerHTML = `<span class="seq">#${id}</span><span class="text"></span><span class="meta"></span>`;
  item.querySelector(".text").textContent = text;
  transcriptList.prepend(item);
}

function updateTranscript(id, text, durationMs, isError = false) {
  const item = transcriptList.querySelector(`[data-sequence="${id}"]`);
  if (!item) {
    return;
  }
  item.classList.toggle("error", isError);
  item.querySelector(".text").textContent = text;
  item.querySelector(".meta").textContent = durationMs ? `${durationMs} ms` : "";
}

async function start() {
  config = await window.whisperStream.getConfig();
  audioContext = new AudioContext();
  samplesPerChunk = Math.floor(audioContext.sampleRate * (config.chunkMs / 1000));
  mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

  await audioContext.audioWorklet.addModule("./pcm-worklet.js");
  sourceNode = audioContext.createMediaStreamSource(mediaStream);
  workletNode = new AudioWorkletNode(audioContext, "pcm-capture-processor");
  workletNode.port.onmessage = (event) => appendSamples(new Float32Array(event.data));
  sourceNode.connect(workletNode);

  running = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  setStatus(`Recording ${config.chunkMs} ms chunks`);
}

function stop() {
  running = false;

  if (bufferedSampleCount > 0) {
    submitChunk(takeSamples(bufferedSampleCount));
  }

  if (workletNode) {
    workletNode.disconnect();
    workletNode = null;
  }
  if (sourceNode) {
    sourceNode.disconnect();
    sourceNode = null;
  }
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaStream = null;
  }
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }

  startButton.disabled = false;
  stopButton.disabled = true;
  levelBar.style.transform = "scaleX(0)";
  setStatus("Stopped");
}

startButton.addEventListener("click", () => {
  start().catch((error) => setStatus(error.message || String(error)));
});
stopButton.addEventListener("click", stop);

