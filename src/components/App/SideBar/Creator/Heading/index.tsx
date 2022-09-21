import { ComponentType, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";
import { Actions } from "~/components/App/SideBar/Actions";
import { Avatar } from "~/components/common/Avatar";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import {
  setIsTimestampLoaded,
  useDataStore,
  useSelectedNode,
} from "~/stores/useDataStore";
import { videoTimetoSeconds } from "~/utils/videoTimetoSeconds";

export const CREATOR_HEADING_HEIGHT = 240;

const Audio = styled(
  ReactAudioPlayer as unknown as ComponentType<
    typeof ReactAudioPlayer.defaultProps
  >
)`
  width: 100%;
`;

export const Heading = () => {
  const selectedNode = useSelectedNode();
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp);

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

  if (!selectedTimestamp) {
    return null;
  }

  return (
    <Flex pb={32}>
      <Flex direction="row" px={24} py={16}>
        <Flex pr={24}>
          <Avatar
            size={100}
            src={selectedTimestamp.image_url || "audio_default.svg"}
          />
        </Flex>

        <Flex grow={1} shrink={1}>
          <Flex pb={10}>
            <Text color="gray300">{selectedTimestamp.episode_title}</Text>
          </Flex>

          <Text kind="heading">{selectedNode?.show_title || "Unknown"}</Text>

          <Flex py={16}>
            <Actions />
          </Flex>

          <Flex>
            <Audio
              controls
              id="audio-player"
              onError={() => setIsTimestampLoaded(true)}
              onLoadedMetadata={() => setIsTimestampLoaded(true)}
              src={selectedTimestamp.link}
              volume={1}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
