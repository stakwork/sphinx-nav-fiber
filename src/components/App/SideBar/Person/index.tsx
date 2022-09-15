import { useSelectedNode } from "~/stores/useDataStore";

export const Person = () => {
  const selectedNode = useSelectedNode();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {selectedNode?.show_title}
    </div>
  );
};
