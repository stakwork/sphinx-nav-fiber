import moment from "moment";
import styled from "styled-components";
import { Avatar } from "~/components/common/Avatar";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import Booster from "~/main/map/booster";

const EpisodeWrapper = styled(Flex).attrs({
  direction: "row",
})`
  padding: 10px 20px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

type Props = {
  boostCount: number;
  date: number;
  description: string;
  imageUrl: string;
  title: string;

  onClick: () => void;
};

export const Episode = ({
  boostCount,
  date,
  description,
  imageUrl,
  title,
  onClick,
}: Props) => {
  return (
    <EpisodeWrapper onClick={onClick}>
      <Flex pr={20}>
        <Avatar src={imageUrl} />
      </Flex>

      <div>
        <Flex align="center" direction="row" pb={4}>
          <Text kind="tiny" color="gray500">
            {moment.unix(date || 0).format("ll")}
          </Text>

          <Booster readOnly boostCount={boostCount} />
        </Flex>

        <Flex pb={4}>
          <Text>{title}</Text>
        </Flex>

        <Text kind="tiny" color="gray500">
          {description}
        </Text>
      </div>
    </EpisodeWrapper>
  );
};
