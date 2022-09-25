import { useEffect, useState } from "react";
import { Text } from "~/components/common/Text";
import { api } from "~/network/api";

type StatResponse = {
  data: {
    // eslint-disable-next-line camelcase
    num_nodes: number;
    // eslint-disable-next-line camelcase
    num_episodes: number;
    // eslint-disable-next-line camelcase
    num_audio: number;
    // eslint-disable-next-line camelcase
    num_video: number;
    // eslint-disable-next-line camelcase
    num_contributors: number;
    // eslint-disable-next-line camelcase
    num_daily: number;
  };
};

export const Stats = () => {
  const [stats, setStats] = useState({
    numAudio: 0,
    numContributors: 0,
    numDaily: 0,
    numEpisodes: 0,
    numNodes: 0,
    numVideo: 0,
  });

  useEffect(() => {
    const run = async () => {
      const { data } = await api.get<StatResponse>("/stats");

      if (data) {
        setStats({
          numAudio: data.num_audio,
          numContributors: data.num_contributors,
          numDaily: data.num_daily,
          numEpisodes: data.num_episodes,
          numNodes: data.num_nodes,
          numVideo: data.num_video,
        });
      }
    };

    run();
  }, []);

  return (
    <div>
      <Text as="div" color="white" kind="regularBold">
        Nodes: {stats.numNodes}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        {" "}
        Episodes: {stats.numEpisodes}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Audio Clips: {stats.numAudio}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Video Clips: {stats.numVideo}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Contributers: {stats.numContributors}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Nodes Added Daily: {stats.numDaily}
      </Text>
    </div>
  );
};
