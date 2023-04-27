import {
    forceCenter,
    forceLink,
    forceManyBody,
    forceSimulation,
} from "d3-force-3d";
import { Vector3 } from "three";
import { GraphData, NodeExtended } from "~/types";

const layout = forceSimulation()
.numDimensions(3)
.force(
    "link",
    forceLink()
    .distance((d: { source: NodeExtended; target: NodeExtended }) => {
        const sourceType = d.source.node_type;
        const targetType = d.target.node_type;

        if (sourceType === "show") {
        return 500;
        }

        switch (targetType) {
        case "show":
            return 200;
        case "topic":
            return 1000;
        case "guest":
            return 300;
        case "clip":
            return 100;
        case "episode":
            return 150;
        default:
            return 100;
        }
    })
    .strength(0.4)
)
.force("center", forceCenter().strength(0.1))
.force("charge", forceManyBody())
.force("dagRadial", null)
.velocityDecay(0.2)
.stop();

const maxTicks = 200;
  
export const generateForceGraphPositions = (data: GraphData) => {

    layout.stop().nodes(data.nodes);

    layout
        .force("link")
        .id((d: NodeExtended) => d.id)
        .links(data.links);

    layout.alpha(0).restart();
    layout.alpha(1).restart();
    
    for (let i = 0; i < maxTicks; i += 1){
        layout.tick();
    }

    // update link positions
    const updatedLinks = data.links.map((l) => {
        const source = l.source as unknown as NodeExtended
        const target = l.target as unknown as NodeExtended
        
        const sourcePosition = new Vector3(source?.x||0, source?.y||0, source?.z||0)
        const targetPosition = new Vector3(target?.x||0, target?.y||0, target?.z||0)
        return {
            ...l,
            sourcePosition,
            targetPosition
        }
    })

    return { nodes: data.nodes, links: updatedLinks }
}