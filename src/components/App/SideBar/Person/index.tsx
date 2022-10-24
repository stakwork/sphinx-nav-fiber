import { Flex } from "~/components/common/Flex";
import { Avatar } from "~/components/common/Avatar";
import { useSelectedNode } from "~/stores/useDataStore";
import { Text } from "~/components/common/Text";

export const Person = () => {
  const selectedNode = useSelectedNode();

  return (
    <Flex direction="row" px={24} py={16}>
      <Avatar size={45} src="person_placeholder2.png" />
      <Flex align="center" direction="row" justify="center" p={10}>
        <Text color="primaryText1">{selectedNode?.label}</Text>
      </Flex>
    </Flex>
  );
};
