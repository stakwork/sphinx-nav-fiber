import moment from "moment";
import { FC, useEffect, useState } from "react";
import {
  CartesianGrid,
  Dot,
  DotProps,
  Line,
  LineChart, Tooltip,
  XAxis,
  YAxis
} from "recharts";
import styled from "styled-components";
import { Flex } from "~/components/common/Flex";
import { Text } from "~/components/common/Text";
import { getSentimentData } from "~/network/fetchGraphData";
import { useAppStore } from "~/stores/useAppStore";
import { FetchSentimentResponse } from "~/types";
import { colors } from "~/utils/colors";

export const MENU_WIDTH = 600;

type SentimentData = {
  date: string;
  score: number;
};

const RenderDot: FC<DotProps> = ({ cx, cy }) => <Dot cx={cx} cy={cy} fill={colors.blueTextAccent} r={2} />;

export const SecondarySideBar = () => {
  const [sentimentData, setSentimentData] = useState<SentimentData[] | undefined>(undefined);

  const [secondarySidebarIsOpen, setSecondarySidebarIsOpen] = useAppStore((s) => [
    s.secondarySidebarIsOpen,
    s.setSecondarySidebarIsOpen,
  ]);

  useEffect(() => {
    const init = async () => {
      try {
        const data: FetchSentimentResponse = await getSentimentData();

        setSentimentData(
          data?.data.map((i) => ({
              date: moment.unix(Number(i.date_added_to_graph.split(".")[0])).format("MM/DD/YY"),
              score: i.sentiment_score,
            }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (secondarySidebarIsOpen) {
      init();
    }
  }, [secondarySidebarIsOpen]);

  return secondarySidebarIsOpen ? (
    <Wrapper id="sidebar-wrapper">
      <CloseButton onClick={() => setSecondarySidebarIsOpen(false)}>
        <span className="material-icons">close</span>
      </CloseButton>
      <ChartWrapper align="flex-start" direction="column" justify="flex-end">
        <Text className="title">Sentiment chart</Text>
        {sentimentData?.length && (
          <LineChart
            data={sentimentData}
            height={300}
            margin={{
              bottom: 5,
              left: -20,
              right: 30,
              top: 5,
            }}
            width={500}
          >
            <CartesianGrid stroke={colors.lightBlue300} strokeDasharray="5 5" />
            <XAxis dataKey="date" interval={Math.floor(sentimentData.length / 3)} stroke={colors.blueTextAccent} />
            <YAxis domain={[0, 10]} stroke={colors.blueTextAccent} />
            <Tooltip />
            <Line dataKey="score" dot={<RenderDot />} stroke="#8884d8" type="monotone" />
          </LineChart>
        )}
      </ChartWrapper>
    </Wrapper>
  ) : null;
};

const Wrapper = styled(Flex)`
  background: ${colors.body};
  height: 100vh;
  padding: 16px 20px;
  width: ${MENU_WIDTH}px;
  z-index: 30;
  display: flex;

  .content {
    display: flex;
    flex-direction: column;
    align
  }
`;

const ChartWrapper = styled(Flex)`
  border-radius: 8px;
  background: ${colors.dashboardHeader};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;

const CloseButton = styled(Flex).attrs({
  align: "center",
  justify: "center",
  p: 5,
})`
  background-color: ${colors.inputBg1};
  border-radius: 50%;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${colors.gray200};
  }
`;
