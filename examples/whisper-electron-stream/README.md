# Whisper Streaming Electron Demo

Standalone Electron demo for Sphinx bounty #2227 / GitHub issue #1755.

It captures microphone audio in the renderer process, slices PCM into chunks of at most 5 seconds, writes each chunk as a WAV file in the main process, and sends that file to a whisper.cpp Node addon for local transcription. The transcript is streamed back into the Electron page chunk by chunk.

## Acceptance Mapping

- Chunks are capped at `5000 ms` in `src/chunking.cjs`.
- The main process receives each PCM chunk, writes a WAV file, and transcribes it through `whisper-node-addon`.
- The app source is self-contained under this directory and can be run independently of `sphinx-nav-fiber`.
- `npm run smoke` validates the chunk cap, WAV writer, and transcriber abstraction without requiring a microphone, Electron download, or Whisper model.

## Install

```bash
npm install
```

## Model

Download a whisper.cpp GGML model and point the app at it:

```bash
npm run download:model -- tiny.en
export WHISPER_MODEL="$PWD/models/ggml-tiny.en.bin"
```

You can also provide any existing whisper.cpp GGML model path:

```bash
export WHISPER_MODEL="/absolute/path/to/ggml-base.en.bin"
```

## Run

```bash
npm start
```

Optional environment variables:

```bash
WHISPER_CHUNK_MS=5000
WHISPER_LANGUAGE=en
WHISPER_KEEP_CHUNKS=1
WHISPER_MOCK=1
```

`WHISPER_MOCK=1` keeps the UI and streaming pipeline runnable before the native addon and model are installed. Real transcription requires `WHISPER_MODEL` and the `whisper-node-addon` dependency.

## Smoke Check

```bash
npm run smoke
```

This creates a short synthetic audio buffer, verifies the chunk cap cannot exceed 5 seconds, writes a WAV file, and runs the mock transcriber.

## Notes

The whisper.cpp stream example commonly uses 5 second windows. This demo keeps the same upper bound and makes the value configurable only downward or up to the hard cap, so a user cannot accidentally submit longer chunks from the UI or environment.

