const fs = require("node:fs");

function clampSample(value) {
  if (Number.isNaN(value)) {
    return 0;
  }
  return Math.max(-1, Math.min(1, value));
}

function writeWavPcm16(filePath, samples, sampleRate) {
  const channelCount = 1;
  const bytesPerSample = 2;
  const dataSize = samples.length * bytesPerSample;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(channelCount, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * channelCount * bytesPerSample, 28);
  buffer.writeUInt16LE(channelCount * bytesPerSample, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  for (let i = 0; i < samples.length; i += 1) {
    const sample = clampSample(samples[i]);
    const int16 = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
    buffer.writeInt16LE(Math.round(int16), 44 + i * bytesPerSample);
  }

  fs.writeFileSync(filePath, buffer);
}

module.exports = {
  writeWavPcm16
};

