import { useEffect, useState } from "react";
import { Text } from "~/components/common/Text";

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
    const fetchData = async () => {
      const r = await fetch("https://knowledge-graph.sphinx.chat/stats");
      const data = await r.json();
      setStats(data.data);
    };

    fetchData();
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
