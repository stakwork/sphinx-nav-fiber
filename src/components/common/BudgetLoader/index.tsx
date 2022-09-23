import { Text } from "~/components/common/Text";
import { Flex } from "~/components/common/Flex";

export const BudgetLoader = () => (
  <Flex align="center" grow={1} justify="center">
    <Flex>
        <Text kind="mediumBold">
            Budget is being set.
        </Text>
    </Flex>
  </Flex>
);
