import * as THREE from "three";
import SpriteText from "three-spritetext";

const nodeMaterials: any = {};

const loader = new THREE.TextureLoader();
const geometry_xs = new THREE.BoxGeometry(10, 10, 10);
const geometry_s = new THREE.BoxGeometry(20, 20, 20);
const geometry_m = new THREE.BoxGeometry(35, 35, 35);

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
      }
      break;
    case "guest":
      img = "person_placeholder.png";
      break;
  }

  if (!img) img = "noimage.jpeg";

  loader.requestHeader = {
    "Access-Control-Allow-Origin": window.location.origin,
  };

  let material = null;

  if (nodeMaterials[img]) {
    material = nodeMaterials[img];
  } else {
    const map = loader.load(img);

    material = new THREE.MeshBasicMaterial({
      map
    });
    nodeMaterials[img] = material;
  }

  
  let geo: any = null
  
  switch (node.node_type) {
    case "clip":
      geo = geometry_xs.clone()
      break;
    case "episode":
      geo = geometry_s.clone()
      break;
    case "show":
      geo = geometry_m.clone()
      break;
    case "guest":
      geo = geometry_s.clone()
      break;
    default:
      geo = geometry_xs.clone()
  }


  const cube = new THREE.Mesh(geo, material);

  cube.castShadow = true;
  cube.receiveShadow = true;

  return cube;
};
