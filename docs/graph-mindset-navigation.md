# Graph Mindset 3D Navigation Concept

This concept describes a navigation model for dense 3D knowledge graphs where users need to move between a high-level map and focused node-level inspection without losing context.

## Navigation Goals

- Let users begin from either a broad overview or a small focused cluster.
- Reduce overload by revealing detail progressively.
- Keep spatial context visible while users inspect a node, branch, or dependency path.
- Make common graph actions available near the node that triggered them.
- Provide a predictable way to return to a previous view after search, filtering, or expansion.

## Two Entry Modes

### Start Small

Use this mode when the graph is large or when the user enters from a known item, search result, or shared link.

- Show the selected root node and its first-degree neighbors.
- Keep hidden neighbors represented as compact count badges.
- Let users expand one hop at a time from the active node.
- Preserve a breadcrumb trail of expanded clusters.
- Add a "show overview" action that animates the camera back to the full graph.

### Start Big

Use this mode when the user wants exploration or comparison.

- Show the full graph as low-detail clusters grouped by node type, source, tag, or community.
- Render only labels for clusters and currently highlighted nodes.
- Let users filter layers before drilling into detail.
- Use hover and selection to preview a cluster before expanding it.
- Add a "focus selection" action that collapses unrelated clusters into the background.

## Core Controls

### Camera Controls

- Scroll or pinch to zoom.
- Drag to rotate around the graph.
- Shift-drag or right-drag to pan.
- Double-click a node to focus it.
- Escape returns to the previous camera state.

### Filtering And Layers

- Node type filters: person, topic, tweet, video, document, organization.
- Relationship filters: dependency, reference, mention, source, semantic similarity.
- Depth filter: one hop, two hops, all visible.
- Time filter when timestamps are available.
- "Pinned only" mode for comparing manually selected nodes.

### Hover And Highlighting

- Hover highlights direct neighbors and fades unrelated nodes.
- Tooltip shows title, type, source, short text, and key metadata.
- Holding hover for a short delay reveals available node actions.
- Highlight colors should remain consistent per relationship type.

## Node Actions

Node actions should appear next to the selected node or inside the node detail panel.

- Expand neighbors: reveal one more hop from the selected node.
- Collapse branch: hide nodes that were expanded from this node.
- Show dependencies only: keep incoming and outgoing dependency paths visible.
- Pin node: keep the node visible while changing filters.
- Search related: prefill search with the selected node's label or topic.
- Open details: show full metadata and source links in the side panel.

## Wireframes

### Overview Mode

```text
+--------------------------------------------------------------------------------+
| Search graph...                                      Depth: 2  View: Overview  |
+----------------------+---------------------------------------------------------+
| Layers               |                                                         |
| [x] People           |             (Topic Cluster)                              |
| [x] Topics           |                  o--o--o                                 |
| [x] Tweets           |                 /       \                                |
| [ ] Documents        |        (Person) o         o (Video Cluster)              |
|                      |                 \       /                                |
| Relationship Types   |                  o--o--o                                 |
| [x] References       |                                                         |
| [x] Mentions         |      faded nodes remain spatial context, not noise        |
| [ ] Similarity       |                                                         |
|                      |                                                         |
| Mini Map             |                                             Camera tools |
| +------------------+ |                                             [+] [-] [R] |
| |      *           | |                                                         |
| |   *     *        | |                                                         |
| +------------------+ |                                                         |
+----------------------+---------------------------------------------------------+
```

### Focus Mode

```text
+--------------------------------------------------------------------------------+
| Search graph...                         Breadcrumb: Root > API > Auth Service  |
+----------------------+---------------------------------------------------------+
| Focus Controls       |                                                         |
| Depth: [1] [2] [All] |               o Related module                           |
|                      |              /                                          |
| Active Filters       | Root node o--o Selected node                             |
| type: Code           |              \                                          |
| relation: depends on |               o Related test                             |
|                      |                                                         |
| Pinned Nodes         |       +-----------------------------------------+        |
| - Auth Service       |       | Selected node                           |        |
| - Token Store        |       | Type: module                             |        |
|                      |       | Actions: Expand, Collapse, Dependencies  |        |
|                      |       | Source links and metadata                |        |
+----------------------+---------------------------------------------------------+
```

### Node Action Menu

```text
          +------------------------+
          | Expand neighbors       |
          | Collapse branch        |
          | Show dependencies only |
          | Pin node               |
          | Open details           |
          +------------------------+
                       |
                    [Node]
```

## Transition Model

The interface should treat navigation changes as reversible view states.

1. User starts in Overview Mode or Focus Mode.
2. Filters, search, and node actions create a new view state.
3. The camera animates to the new state instead of jumping.
4. A breadcrumb records the path of focus changes.
5. Escape or Back restores the previous view state.
6. Clear filters returns to the original graph view.

## Implementation Notes

- Store navigation state separately from graph data: active node, pinned nodes, depth, filters, camera target, and expanded branches.
- Represent hidden neighbors with counts so users know more graph exists.
- Keep search results as temporary pins until the user clears the search.
- Avoid adding labels to every node in dense views; show labels for selected, pinned, and hovered nodes only.
- Use consistent animation timing for focus, expand, collapse, and reset actions so users can track movement.
- Let the minimap show the user's current camera region and pinned nodes.

## Acceptance Mapping

- Clear navigation strategies: Start Small, Start Big, Focus Mode, and Overview Mode.
- Basic wireframes: sidebar, minimap, main 3D view, selected-node panel, and node action menu.
- Fluid transition concept: reversible view states with animated camera movement and breadcrumbs.
