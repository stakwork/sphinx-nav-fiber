import { Mesh, Object3D } from "three";

export type Moment = {
  boost: number;
  children?: string[];
  date: number;
  description?: string;
  episode_title: string;
  guests: string[];
  image_url?: string;
  keyword?: boolean;
  link: string;
  node_type: string;
  ref_id: string;
  show_title: string;
  text: string;
  timestamp: string;
  topics: string[];
  type: string;
  weight: number;
};

export type Node = {
  boost?: number;
  colors?: string[];
  details?: Partial<Moment>;
  id: string;
  image_url?: string;
  label?: string;
  name: string;
  node_type: string;
  scale?: number;
  text?: string;
  type?: string;
  weight?: number;
  __threeObj?: Object3D;
};

export type Link = {
  source: string;
  target: string;
};

export type GraphData = {
  nodes: Node[];
  links: Link[];
};

export class NodeMesh extends Mesh {
  __data?: Node;
}
