import moment from "moment";
import styled from "styled-components";
import { Booster } from "~/components/Booster";
import { Avatar } from "~/components/common/Avatar";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";

const EpisodeWrapper = styled(Flex).attrs({
  direction: "row",
})`
  padding: 10px 20px;
  opacity: 0.8;
  cursor: pointer;
  border-bottom: 1px solid #101317;

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
}: Props) => (
  <EpisodeWrapper background="background" onClick={onClick}>
    <Flex pr={20}>
      <Avatar src={imageUrl} />
    </Flex>

    <div>
      <Flex align="center" direction="row" pb={4}>
        <Text color="textPrimary" kind="tiny">
          {moment.unix(date || 0).format("ll")}
        </Text>

        <Booster count={boostCount} readOnly />
      </Flex>

      <Flex pb={4}>
        <Text color="textPrimary">{title}</Text>
      </Flex>

      <Text color="textSecondary" kind="tiny">
        {description}
      </Text>
    </div>
  </EpisodeWrapper>
);
