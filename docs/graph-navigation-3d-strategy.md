# Graph Mindset: 3D Navigation Strategy

Issue: `#2498`

## Goals

- Reduce visual overload when graphs are large.
- Let users start from either macro view or micro view.
- Provide a smooth transition between overview and node-level inspection.

## Navigation Modes

### 1) Start Small (Micro-first)

- Initial state shows a focused seed node and its first-ring neighbors.
- Node actions:
  - `Expand neighbors`
  - `Collapse subtree`
  - `Show dependencies only`
- Benefits:
  - Low cognitive load.
  - Fast path to inspect local structure.

### 2) Start Big (Macro-first)

- Initial state shows the full graph as an overview map.
- Users narrow scope with filters:
  - by node type
  - by tag/category
  - by relationship type
- Benefits:
  - Immediate global context.
  - Better cluster and hotspot discovery.

## Core Interaction Controls

- Camera:
  - Scroll to zoom
  - Left drag to rotate
  - Right drag to pan
- Hover:
  - Highlight direct connections
  - Show lightweight tooltip metadata
- Selection:
  - Open contextual action panel near selected node
- Search:
  - Jump directly to a node by name/id and center camera on it

## Layout Wireframe (Low Fidelity)

```text
+---------------------------------------------------------------+
| Top Bar: Search [..............]   Mode: Micro/Macro Toggle  |
+----------------------+----------------------------------------+
| Left Sidebar         | Main 3D View                           |
| - Filters            |                                        |
| - Layer toggles      |   Graph canvas                         |
| - Mini-map overview  |   (zoom / pan / rotate)               |
|                      |                                        |
+----------------------+------------------+---------------------+
| Bottom Status                           | Node Action Panel    |
| - Active filters                         | - Expand neighbors   |
| - Selection path                         | - Collapse subtree   |
| - Graph size summary                     | - Show dependencies  |
+-----------------------------------------+---------------------+
```

## User Flows

### Flow A: Investigate a known node

1. Search node.
2. Camera jumps and centers selected node.
3. Hover reveals quick context.
4. Use action panel to expand one hop at a time.

### Flow B: Explore unknown graph

1. Start in macro mode.
2. Apply filters/layers to reduce clutter.
3. Select a cluster hotspot.
4. Switch to micro mode for detailed traversal.

## Progressive Disclosure Rules

- Default tooltip: minimal metadata only.
- Expand node lazily (request/render neighbors on demand).
- Keep depth-limited expansion by default to avoid scene explosion.

## Acceptance Mapping

- Clear strategies for small-first and big-first exploration: covered.
- Basic wireframes with UI element placement: covered.
- Transition concept between overview and node inspection: covered.

