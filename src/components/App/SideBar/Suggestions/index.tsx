import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { Relevance } from "../Relevance";

const Divider = styled.div`
  height: 1px;
  background: #ccc;
  width: 100%;
  margin-bottom: 20px;
`;

export const Suggestions = () => (
  <div>
    <Divider />

    <Flex px={20} pb={10}>
      <Text kind="medium">More like this...</Text>
    </Flex>

    <Relevance />
  </div>
);
