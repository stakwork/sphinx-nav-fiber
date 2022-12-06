const { origin } = window.location;

export const isDevelopment = !!(
  origin === "http://localhost:3000" ||
  origin === "http://localhost:3001" ||
  origin === "https://sphinx-jarvis-david.sphinx1.repl.co"
);

export const API_URL =
  process.env.REACT_DEV_API_URL || "https://knowledge-graph.sphinx.chat";

export const AWS_IMAGE_BUCKET_URL =
  "https://stakwork-uploads.s3.amazonaws.com/";
export const CLOUDFRONT_IMAGE_BUCKET_URL =
  "https://d1gd7b7slyku8k.cloudfront.net/";

export const GRAPH_LINK_COLOR = "#ccc";
export const GRAPH_FOG_COLOR = "blue";

export const GRAPH_GROUND_COLOR = 0xcccccc;
export const GRAPH_LIGHT_INTENSITY = 1;

export const BOOST_SUCCESS = "Boosted successfully";
export const BOOST_ERROR_BUDGET = "Boost failed, insufficient budget";

export const NODE_ADD_SUCCESS = "Node added successfully";
