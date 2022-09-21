import * as THREE from "three";
import SpriteText from "three-spritetext";

const cachedMaterials: Record<string, THREE.MeshStandardMaterial> = {};

const geometryS = new THREE.BoxGeometry(10, 10, 10);
const geometryM = new THREE.BoxGeometry(20, 20, 20);
const geometryL = new THREE.BoxGeometry(35, 35, 35);

const loader = new THREE.TextureLoader();

export const renderNode = (node: any) => {
  if (node.fakeData) {
    const sprite = new SpriteText(node.label);

    sprite.color = "#000000";
    sprite.textHeight = 10 + node.scale;

    return sprite;
  }

  const color = node.colors?.[0] || "tomato";

  if (node.type === "topic") {
    const sprite = new SpriteText(node.name);

    sprite.color = color;

    const textSize = node.scale > 85 ? 100 : 15 + node.scale;

    sprite.textHeight = textSize;

    return sprite;
  }

  let img: string;

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
          img = node.image_url;
          break;
      }

      break;
    case "guest":
      img = "person_placeholder.png";
      break;
    default:
      img = node.image_url;
  }

  if (!img) {
    img = "noimage.jpeg";
  }

  let material = null;

  if (cachedMaterials[img]) {
    material = cachedMaterials[img];
  } else {
    const map = loader.load(img);

    material = new THREE.MeshStandardMaterial({
      map,
    });

    cachedMaterials[img] = material;
  }

  let geo: THREE.BufferGeometry;

  switch (node.node_type) {
    case "guest":
    case "episode":
      geo = geometryM.clone();
      break;
    case "show":
      geo = geometryL.clone();
      break;
    default:
      geo = geometryS.clone();
  }

  const cube = new THREE.Mesh(geo, material); // new THREE.Mesh(geo.clone(), material);

  cube.castShadow = true;
  cube.receiveShadow = true;

  return cube;
};
