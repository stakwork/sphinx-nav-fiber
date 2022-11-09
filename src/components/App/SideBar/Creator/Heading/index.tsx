import { ComponentType, useEffect, useState } from "react";
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
import { colors } from "~/utils/colors";
import { videoTimetoSeconds } from "~/utils/videoTimetoSeconds";
import { keysendPayment } from "~/utils/keysend";


export const CREATOR_HEADING_HEIGHT = 240;

const HeadingWrappper = styled(Flex)`
  background: ${colors.dashboardHeader};
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

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
  const [listenedTime, setListenTime] = useState<number>(0);
  const [played, setPlayed] = useState<boolean>(false);

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

  const onPlayHandler = async () => {
    if (!played) {
      await keysendPayment(10, selectedNode?.pub_key);
      setPlayed(true);
    }
  };

  const OnListenHadler = async () => {
    if (listenedTime === 50) {
      await keysendPayment(10, selectedNode?.pub_key);
      setListenTime(0);
    } else {
      setListenTime((prev) => prev + 10);
    }
  };

  return (
    <HeadingWrappper pb={32}>
      <Flex direction="row" px={24} py={16}>
        <Flex pr={24}>
          <Avatar
            size={100}
            src={selectedTimestamp.image_url || "audio_default.svg"}
          />
        </Flex>

        <Flex grow={1} shrink={1}>
          <Flex pb={10}>
            <Text color="mainBottomIcons">
              {selectedTimestamp.episode_title}
            </Text>
          </Flex>

          <Text kind="heading">{selectedNode?.show_title || "Unknown"}</Text>

          <Flex py={16}>
            <Actions />
          </Flex>

          <Flex>
            <Audio
              controls
              id="audio-player"
              listenInterval={10000}
              onError={() => setIsTimestampLoaded(true)}
              onListen={OnListenHadler}
              onLoadedMetadata={() => setIsTimestampLoaded(true)}
              onPlay={onPlayHandler}
              src={selectedTimestamp.link}
              volume={1}
            />
          </Flex>
        </Flex>
      </Flex>
    </HeadingWrappper>
  );
};
