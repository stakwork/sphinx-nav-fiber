import { Flex } from "~/components/common/Flex";
import { Avatar } from "~/components/common/Avatar";
import { useSelectedNode } from "~/stores/useDataStore";

export const Person = () => {
  const selectedNode = useSelectedNode();

  return (
    <Flex direction="row" px={24} py={16}>
      <Avatar size={45} src="person_placeholder2.png" />
      <Flex align="center" direction="row" justify="center" p={10}>
        {selectedNode?.label}
      </Flex>
    </Flex>
  );
};
