import { Flex } from "~/components/common/Flex";
import { useSelectedNode } from "~/stores/useDataStore";

export const Person = () => {
  const selectedNode = useSelectedNode();

  return (
    <Flex align="center" direction="row" justify="center" p={20}>
      {selectedNode?.label}
    </Flex>
  );
};
