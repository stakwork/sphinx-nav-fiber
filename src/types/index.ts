/* eslint-disable camelcase */
import { Mesh } from "three";

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
};

export type Link<T = string> = {
  index?: T extends string ? never : number;
  source: T;
  target: T;
};

export type GraphData<T = string> = {
  links: Link<T>[];
  nodes: NodeExtended[];
  expired?: boolean; // A quick to help notify when an Lsat has expired
};

export class NodeMesh extends Mesh {
  __data?: NodeExtended;
}

export type NodeType = "clip" | "episode" | "guest" | "show" | "topic";

export type Type =
  | "twitter"
  | "youtube"
  | "guest"
  | "podcast"
  | "twitter_space";
