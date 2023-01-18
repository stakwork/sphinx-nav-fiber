import { capitalize } from "lodash";
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { useDataStore } from "~/stores/useDataStore";
import { NodeType, nodeTypes } from "~/types";

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  text-align: center;
`;

export const CategorySelect = () => {
  const categoryFilter = useDataStore((s) => s.categoryFilter);

  return (
    <Flex
      align="center"
      background="white"
      borderRadius={8}
      direction="row"
      px={12}
      py={8}
    >
      <Select
        onChange={(e) => {
          const type = e.target.value as NodeType | "none";

          useDataStore.setState({
            categoryFilter: type === "none" ? null : type,
          });
        }}
        value={categoryFilter || "none"}
      >
        <option value="none">Node type</option>

        {nodeTypes.map((type) => (
          <option key={type} value={type}>
            {capitalize(type)}
          </option>
        ))}
      </Select>

      <span className="material-icons-outlined">expand_more</span>
    </Flex>
  );
};
