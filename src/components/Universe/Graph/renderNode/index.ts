import * as THREE from "three";
import SpriteText from "three-spritetext";

const nodeMaterials: any = {};

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

  if (nodeMaterials[img]) {
    material = nodeMaterials[img];
  } else {
    const map = loader.load(img);

    // const { selectedNode } = useDataStore.getState();

    // if (selectedNode && node.id === selectedNode.id) {
    //   material = new THREE.SpriteMaterial({
    //     map,
    //     color: "yellow",
    //     fog: true,
    //   });
    // } else {
    material = new THREE.SpriteMaterial({
      map,
    });

    nodeMaterials[img] = material;
  }

  // let geo: THREE.BufferGeometry;

  // switch (node.node_type) {
  //   case "guest":
  //   case "episode":
  //     geo = geometry_s.clone();
  //     break;
  //   case "show":
  //     geo = geometry_m.clone();
  //     break;
  //   default:
  //     geo = geometry_xs.clone();
  // }

  const sprite = new THREE.Sprite(material); // new THREE.Mesh(geo.clone(), material);

  sprite.castShadow = true;
  sprite.receiveShadow = true;

  switch (node.node_type) {
    case "guest":
    case "episode":
      sprite.scale.set(20, 20, 1);
      break;
    case "show":
      sprite.scale.set(35, 35, 1);
      break;
    default:
      sprite.scale.set(10, 10, 1);
  }

  return sprite;
};
