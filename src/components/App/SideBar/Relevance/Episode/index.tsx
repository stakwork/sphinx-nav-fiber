import { ComponentType, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { Booster } from "~/components/Booster";
import { Avatar } from "~/components/common/Avatar";
import { Flex } from "~/components/common/Flex";
import { FlexboxProps } from "~/components/common/Flex/flexbox";
import { Text } from "~/components/common/Text";
import { colors } from "~/utils/colors";
import { Actions } from "../../Actions";
import ReactAudioPlayer from "react-audio-player";
import { setIsTimestampLoaded, useDataStore } from "~/stores/useDataStore";
import { videoTimetoSeconds } from "~/utils/videoTimetoSeconds";

type EpisodeTypeImage = {
  [key: string]: string;
};

type EpisodeWrapperProps = FlexboxProps & {
  isSelected?: boolean;
};

const EpisodeTypeImages: EpisodeTypeImage = {
  podcast: 'podcast.png',
  twitter: 'twitter.png',
  twitter_space: 'twitter.png',
  youtube: 'youtube.png',
}

const EpisodeWrapper = styled(Flex).attrs({
  direction: "row",
})<EpisodeWrapperProps>`

  padding: 10px 20px;
  opacity: 0.8;
  cursor: pointer;
  border-bottom: 1px solid #101317;

  ${props => props.isSelected && `
    background: ${ colors.dashboardHeader };
    border-bottom: 1px solid #101317;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 0.9;
    position: sticky;
    top: 0;
    bottom: 0;
  `}

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
  id?: string;
  imageUrl: string;
  title: string;
  type?: string;

  onClick: () => void;
};

const Audio = styled(
  ReactAudioPlayer as unknown as ComponentType<
    typeof ReactAudioPlayer.defaultProps
  >
)`
  width: 100%;
  height: 20px;
`;

export const Episode = ({
  boostCount,
  date,
  description,
  id,
  imageUrl,
  title,
  type,
  onClick,
}: Props) => {
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp);
  const isSelected = !!(selectedTimestamp && selectedTimestamp.id === id);

  useEffect(() => {
    if (!selectedTimestamp) {
      return;
    }

    const { timestamp } = selectedTimestamp;

    const audioElement = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;

    if (audioElement) {
      audioElement.currentTime = timestamp ? videoTimetoSeconds(timestamp) : 0;
    }
  }, [selectedTimestamp]);

  return (
  <EpisodeWrapper background="body" isSelected={isSelected} onClick={onClick}>
    <Flex align="center" pr={20}>
      <Avatar src={imageUrl} />
      <Booster count={boostCount} readOnly />
    </Flex>

    <Flex grow={1} shrink={1}>
      <Flex align="center" direction="row" justify="space-between" pb={4}>
        <Flex align="center" direction="row">
          {type && EpisodeTypeImages[type] && <img alt={type} className="type-image" src={EpisodeTypeImages[type]} />}

          <Text color="primaryText1" kind="tiny">
            {moment.unix(date || 0).format("ll")}
          </Text>
        </Flex>

        {isSelected &&(
          <Flex>
            <Actions />
          </Flex>
        )}

      </Flex>

      <Flex pb={4}>
        <Text color="primaryText1">{description}</Text>
      </Flex>

      {!isSelected && (
        <Text color="mainBottomIcons" kind="tiny">
          {title}
        </Text>
      )}

      {isSelected && (
        <Flex style={{ marginTop: '4px' }}>
          <Audio
            controls
            id="audio-player"
            onError={() => setIsTimestampLoaded(true)}
            onLoadedMetadata={() => setIsTimestampLoaded(true)}
            src={selectedTimestamp.link}
            volume={1}
          />
        </Flex>
      )}
    </Flex>
  </EpisodeWrapper>
)};
