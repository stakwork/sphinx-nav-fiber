import { ClipLoader } from "react-spinners";
import styled, { css } from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import Booster from "~/main/map/booster";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { ColorName, colors } from "~/utils/colors";
import { formatTimestamp } from "~/utils/formatTimestamp";

const Wrapper = styled(Flex).attrs<{ isSelected?: boolean }>(
  ({ isSelected }) => ({
    background: isSelected ? "lightBlue100" : "white",
    direction: "row",
  })
)<{ isSelected?: boolean }>`
  cursor: pointer;

  ${({ isSelected }) =>
    !isSelected &&
    css`
      &:hover {
        background: #f1f1f1;
      }
    `}
`;

type Props = {
  timestamp: NodeExtended;
  onClick?: () => void;
};

export const Timestamp = ({ onClick, timestamp }: Props) => {
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp);
  const isTimestampLoaded = useDataStore((s) => s.isTimestampLoaded);

  const isSelected = !!(
    selectedTimestamp && selectedTimestamp.timestamp === timestamp.timestamp
  );

  const color: ColorName = isSelected ? "lightBlue500" : "gray500";

  //   const selectedStyle = isSelected
  //     ? {
  //         fontWeight: 500,
  //         background: "#cde0ff4d",
  //         color: "#5D8FDD !important",
  //       }
  //     : {
  //         fontWeight: 300,
  //         background: "#fff",
  //       };

  //   const errorStyle = isError
  //     ? {
  //         color: "red",
  //       }
  //     : {};

  return (
    <Wrapper px={20} py={12} isSelected={isSelected} onClick={onClick}>
      <Flex px={20} direction="row">
        {isSelected && !isTimestampLoaded ? (
          <ClipLoader color={colors[color]} loading={true} size={14} />
        ) : (
          <span
            className="material-icons"
            style={{
              color: colors[color],
              fontSize: 18,
            }}
          >
            {isSelected ? "play_arrow" : "access_time"}
            {/* {isError ? "error" : isSelected ? "play_arrow" : "access_time"} */}
          </span>
        )}
      </Flex>

      <div>
        {timestamp.timestamp && (
          <Text kind={isSelected ? "mediumBold" : "medium"} color={color}>
            {formatTimestamp(timestamp.timestamp)}
          </Text>
        )}

        {!!timestamp.boost && (
          <Flex pl={10}>
            <Booster boostCount={timestamp.boost} readOnly />
          </Flex>
        )}

        <Flex pt={4}>
          <Text kind={isSelected ? "regularBold" : "regular"} color={color}>
            {timestamp.description}
          </Text>
        </Flex>
      </div>
    </Wrapper>
  );
};
