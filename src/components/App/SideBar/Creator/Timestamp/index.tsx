import { ClipLoader } from "react-spinners";
import styled, { css } from "styled-components";
import { Booster } from "~/components/Booster";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { ColorName, colors } from "~/utils/colors";
import { formatDescription } from "~/utils/formatDescription";
import { formatTimestamp } from "~/utils/formatTimestamp";

const Wrapper = styled(Flex).attrs<{ isSelected?: boolean }>(
  ({ isSelected }) => ({
    background: isSelected ? "lightBlue100" : "body",
    direction: "row",
  })
)<{ isSelected?: boolean }>`
  cursor: pointer;
  color: ${colors.primaryText1};

  ${({ isSelected }) =>
    !isSelected &&
    css`
      &:hover {
        background: ${colors.dashboardHeader};
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

  const color: ColorName = isSelected ? "blueTextAccent" : "placeholderText";

  return (
    <Wrapper isSelected={isSelected} onClick={onClick} px={20} py={12}>
      <Flex direction="row" px={20}>
        {isSelected && !isTimestampLoaded ? (
          <ClipLoader color={colors[color]} loading size={14} />
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
        <Flex align="center" direction="row">
          {timestamp.timestamp && (
            <Text
              color="primaryText1"
              kind={isSelected ? "mediumBold" : "medium"}
            >
              {formatTimestamp(timestamp.timestamp)}
            </Text>
          )}

          {!!timestamp.boost && (
            <Flex pl={10}>
              <Booster count={timestamp.boost} readOnly />
            </Flex>
          )}
        </Flex>

        <Flex pt={4}>
          <Text
            color={isSelected ? "blueTextAccent" : "mainBottomIcons"}
            kind={isSelected ? "regularBold" : "regular"}
          >
            {formatDescription(timestamp.description)}
          </Text>
        </Flex>
      </div>
    </Wrapper>
  );
};
