import { noop } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "~/components/common/Text";
import { api } from "~/network/api";

type StatResponse = {
  data: {
    /* eslint-disable camelcase */
    num_nodes: number;
    num_episodes: number;
    num_audio: number;
    num_video: number;
    num_contributors: number;
    num_daily: number;
    num_twitter_space: number;
  };
};

type TStats = {
  numAudio: number;
  numContributors: number;
  numDaily: number;
  numEpisodes: number;
  numNodes: number;
  numTwitterSpace: number;
  numVideo: number;
};

export const Stats = () => {
  const [stats, setStats] = useState<TStats | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const { data } = await api.get<StatResponse>("/stats");

        if (data) {
          setStats({
            numAudio: data.num_audio,
            numContributors: data.num_contributors,
            numDaily: data.num_daily,
            numEpisodes: data.num_episodes,
            numNodes: data.num_nodes,
            numTwitterSpace: data.num_twitter_space,
            numVideo: data.num_video,
          });
        }
      } catch (e) {
        noop();
      }
    };

    run();
  }, []);

  if (!stats) {
    return null;
  }

  return (
    <div>
      <StatsText as="div" color="white" kind="regularBold">
        Nodes: {stats.numNodes}
      </StatsText>

      <StatsText as="div" color="white" kind="regularBold">
        Episodes: {stats.numEpisodes}
      </StatsText>

      <StatsText as="div" color="white" kind="regularBold">
        Audio Clips: {stats.numAudio}
      </StatsText>

      <StatsText as="div" color="white" kind="regularBold">
        Video Clips: {stats.numVideo}
      </StatsText>

      <StatsText as="div" color="white" kind="regularBold">
        Twitter Spaces: {stats.numTwitterSpace}
      </StatsText>
    </div>
  );
};

const StatsText = styled(Text)`
  padding: 5px;
`;
