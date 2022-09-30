import { Mesh, Object3D } from "three";

export type Node = {
  boost?: number | null;
  children?: string[];
  colors: string[];
  date?: number;
  description?: string;
  episode_title?: string;
  guests?: (null | string)[];
  id: string;
  image_url?: string;
  keyword?: boolean;
  label: string;
  link?: string;
  name: string;
  node_type: NodeType;
  ref_id: string;
  scale?: number;
  show_title?: string;
  text?: string;
  timestamp?: string;
  topics?: string[];
  type?: Type;
  weight?: number;
};

export type NodeExtended = Node & {
  x?: number;
  y?: number;
  z?: number;
  __threeObj?: Object3D;
};

export type Link<T = string> = {
  source: T;
  target: T;
};

export type GraphData = {
  nodes: NodeExtended[];
  links: Link[];
};

export class NodeMesh extends Mesh {
  __data?: NodeExtended;
}

export type NodeType = "clip" | "episode" | "guest" | "show" | "topic";

export type Type = "twitter" | "youtube" | "guest" | "podcast" | "twitter_space";
