import { Flex } from "~/components/common/Flex";
import { useSelectedNode } from "~/stores/useDataStore";
import { Text } from "~/components/common/Text";

export const Topic = () => {
  const selectedNode = useSelectedNode();

  return (
      <Flex align="center" justify="center" >
        <Text color="primaryText1" style={{fontSize:40}}>{selectedNode?.label}</Text>
      </Flex>
  );
};
