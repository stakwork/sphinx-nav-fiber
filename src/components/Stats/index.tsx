import { useEffect, useState } from "react";
import { Text } from "~/components/common/Text";
import { api } from "~/network/api";

type StatResponse = {
  data: {
    num_nodes: number;
    num_episodes: number;
    num_audio: number;
    num_video: number;
    num_contributors: number;
    num_daily: number;
  };
};
export const Stats = () => {
  const [stats, setStats] = useState({
    num_nodes: 0,
    num_episodes: 0,
    num_audio: 0,
    num_video: 0,
    num_contributors: 0,
    num_daily: 0,
  });

  useEffect(() => {
    const run = async () => {
      const { data } = await api.get<StatResponse>("/stats");

      setStats(data);
    };

    run();
  }, []);

  return (
    <div>
      <Text as="div" color="white" kind="regularBold">
        Nodes: {stats.num_nodes}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        {" "}
        Episodes: {stats.num_episodes}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Audio Clips: {stats.num_audio}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Video Clips: {stats.num_video}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Contributers: {stats.num_contributors}
      </Text>

      <Text as="div" color="white" kind="regularBold">
        Nodes Added Daily: {stats.num_daily}
      </Text>
    </div>
  );
};
