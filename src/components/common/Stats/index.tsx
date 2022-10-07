import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";

export default function Stats() {
  const [stats, setStats] = useState({
    num_nodes: 0,
    num_episodes: 0,
    num_audio: 0,
    num_video: 0,
    num_contributors: 0,
    num_daily: 0,
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const r = await fetch("https://knowledge-graph.sphinx.chat/stats");
  //     const data = await r.json();
  //     setStats(data.data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      Nodes: {stats.num_nodes}
      <br />
      Episodes: {stats.num_episodes}
      <br />
      Audio Clips: {stats.num_audio}
      <br />
      Video Clips: {stats.num_video}
      <br />
      Contributers: {stats.num_contributors}
      <br />
      Nodes Added Daily: {stats.num_daily}
    </div>
  );
}
