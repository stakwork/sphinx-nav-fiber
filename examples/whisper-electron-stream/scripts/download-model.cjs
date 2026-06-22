const fs = require("node:fs");
const https = require("node:https");
const path = require("node:path");

const modelName = process.argv[2] || "tiny.en";
const fileName = `ggml-${modelName}.bin`;
const modelDir = path.join(__dirname, "..", "models");
const target = path.join(modelDir, fileName);
const url = `https://huggingface.co/ggerganov/whisper.cpp/resolve/main/${fileName}`;

fs.mkdirSync(modelDir, { recursive: true });

if (fs.existsSync(target)) {
  console.log(`Model already exists: ${target}`);
  process.exit(0);
}

function download(source, destination, redirectCount = 0) {
  if (redirectCount > 5) {
    throw new Error("Too many redirects while downloading model");
  }

  https.get(source, (response) => {
    if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
      response.resume();
      download(response.headers.location, destination, redirectCount + 1);
      return;
    }

    if (response.statusCode !== 200) {
      response.resume();
      throw new Error(`Model download failed with HTTP ${response.statusCode}`);
    }

    const file = fs.createWriteStream(destination);
    response.pipe(file);
    file.on("finish", () => {
      file.close(() => {
        console.log(`Downloaded ${destination}`);
      });
    });
  }).on("error", (error) => {
    fs.rmSync(destination, { force: true });
    throw error;
  });
}

console.log(`Downloading ${url}`);
download(url, target);

