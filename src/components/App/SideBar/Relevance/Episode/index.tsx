import moment from "moment";
import styled from "styled-components";
import { Booster } from "~/components/Booster";
import { Avatar } from "~/components/common/Avatar";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";

type EpisodeTypeImage = {
  [key: string]: string;
};

const EpisodeTypeImages: EpisodeTypeImage = {
  podcast: 'podcast.png',
  twitter: 'twitter.png',
  twitter_space: 'twitter.png',
  youtube: 'youtube.png',
}

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

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  `;

type Props = {
  boostCount: number;
  date: number;
  description: string;
  imageUrl: string;
  title: string;
  type?: string;

  onClick: () => void;
};

export const Episode = ({
  boostCount,
  date,
  description,
  imageUrl,
  title,
  type,
  onClick,
}: Props) => (
  <EpisodeWrapper background="body" onClick={onClick}>
    <Flex align="center" pr={20}>
      <Avatar src={imageUrl} />
      <Booster count={boostCount} readOnly />
    </Flex>

    <div>
      <Flex align="center" direction="row" pb={4}>
        {type && EpisodeTypeImages[type] && <img alt={type} className="type-image" src={EpisodeTypeImages[type]} />}

        <Text color="primaryText1" kind="tiny">
          {moment.unix(date || 0).format("ll")}
        </Text>

      </Flex>

      <Flex pb={4}>
        <Text color="primaryText1">{description}</Text>
      </Flex>

      <Text color="mainBottomIcons" kind="tiny">
        {title}
      </Text>
    </div>
  </EpisodeWrapper>
);
