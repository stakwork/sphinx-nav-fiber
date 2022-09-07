const origin = window.location.origin;

export const isDevelopment =
  origin === "http://localhost:3000" ||
  origin === "http://localhost:3001" ||
  origin === "https://sphinx-jarvis-david.sphinx1.repl.co"
    ? true
    : false;

export const API_URL = "https://knowledge-graph.sphinx.chat";
