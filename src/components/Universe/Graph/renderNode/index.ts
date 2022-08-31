import * as THREE from "three";
import SpriteText from "three-spritetext";

const nodeMaterials: any = {};

const loader = new THREE.TextureLoader();
const geometry = new THREE.BoxGeometry(15, 15, 15);

export const renderNode = (node: any) => {
  if (node.fakeData) {
    const sprite = new SpriteText(node.label);
    sprite.color = "#000000";
    sprite.textHeight = 10 + node.scale;

    return sprite;
  }

  let color = node.colors && node.colors[0] ? node.colors[0] : "tomato";

  if (node.type === "topic") {
    const sprite = new SpriteText(node.name);
    sprite.color = color;
    let textSize = 15 + node.scale;
    if (textSize > 100) textSize = 100;

    sprite.textHeight = textSize;

    return sprite;
  }

  let img: string = node.image_url;

  switch (node.node_type) {
    case "clip":
      switch (node.type) {
        case "youtube":
          img = "youtube_default.jpeg";
          break;
        case "twitter":
          img = "twitter_logo.svg";
          break;
        default:
          img = "noimage.jpeg";
      }
      break;
    case "guest":
      img = "person_placeholder.png";
      break;
    default:
      img = "noimage.jpeg";
  }

  loader.requestHeader = {
    "Access-Control-Allow-Origin": window.location.origin,
  };

  let material = null;

  if (nodeMaterials[img]) {
    material = nodeMaterials[img];
  } else {
    const map = loader.load(img);

    material = new THREE.MeshBasicMaterial({ map });
    nodeMaterials[img] = material;
  }

  const cube = new THREE.Mesh(geometry.clone(), material);

  return cube;
};
