const DEFAULT_CHUNK_MS = 5000;
const MAX_CHUNK_MS = 5000;
const MIN_CHUNK_MS = 250;

function resolveChunkMs(rawValue) {
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) {
    return DEFAULT_CHUNK_MS;
  }

  return Math.min(MAX_CHUNK_MS, Math.max(MIN_CHUNK_MS, Math.floor(parsed)));
}

module.exports = {
  DEFAULT_CHUNK_MS,
  MAX_CHUNK_MS,
  MIN_CHUNK_MS,
  resolveChunkMs
};

