const path = require("node:path");

function normalizeAddonResult(result) {
  if (typeof result === "string") {
    return result.trim();
  }

  if (Array.isArray(result)) {
    return result
      .map((segment) => {
        if (typeof segment === "string") {
          return segment;
        }
        if (Array.isArray(segment)) {
          return segment[2] || segment[1] || "";
        }
        if (segment && typeof segment === "object") {
          return segment.text || segment.transcript || "";
        }
        return "";
      })
      .join(" ")
      .trim();
  }

  if (result && typeof result === "object") {
    return String(result.text || result.transcript || "").trim();
  }

  return "";
}

function loadWhisperAddon() {
  try {
    return require("whisper-node-addon/dist");
  } catch (_firstError) {
    return require("whisper-node-addon");
  }
}

function createTranscriber(options = {}) {
  if (options.mock) {
    return {
      async transcribe(_wavPath, meta = {}) {
        return {
          sequence: meta.sequence,
          text: `mock transcript for ${meta.durationMs || 0} ms chunk`
        };
      }
    };
  }

  const modelPath = options.modelPath ? path.resolve(options.modelPath) : "";
  if (!modelPath) {
    return {
      async transcribe() {
        throw new Error("WHISPER_MODEL is required unless WHISPER_MOCK=1");
      }
    };
  }

  return {
    async transcribe(wavPath, meta = {}) {
      const addon = loadWhisperAddon();
      const transcribe = addon.transcribe || addon.default?.transcribe;
      if (typeof transcribe !== "function") {
        throw new Error("whisper-node-addon did not expose a transcribe function");
      }

      const raw = await transcribe({
        language: options.language || "en",
        model: modelPath,
        fname_inp: wavPath,
        translate: false
      });

      return {
        sequence: meta.sequence,
        text: normalizeAddonResult(raw)
      };
    }
  };
}

module.exports = {
  createTranscriber,
  normalizeAddonResult
};

