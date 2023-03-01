import { Flex } from "~/components/common/Flex";
import { useSelectedNode } from "~/stores/useDataStore";
import { Text } from "~/components/common/Text";
import { ScatterChart, Scatter, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { colors } from "~/utils/colors";

export const Data = () => {
  const selectedNode = useSelectedNode();

  const data = [...((selectedNode as any)?.data || [])].sort((a, b) => (a.year || 0) - (b.year || 0));

  return (
    <Flex direction="column" px={24} py={16}>
      <Flex align="center" direction="row" justify="flex-start" p={10}>
        <Text color="primaryText1">{selectedNode?.label}</Text>
      </Flex>
      <ScatterChart height={200} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} width={400}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="year"
          domain={[1970, 2023]}
          label={{ value: (selectedNode as any).x_axis_name, position: "insideBottom", offset: -10, fill: "#fff" }}
          name="X"
          tick={{ fill: colors.lightBlue300 }}
          type="number"
        />
        <YAxis
          color="#000"
          dataKey="rate"
          label={{
            value: (selectedNode as any).y_axis_name,
            angle: -90,
            position: "insideLeft",
            offset: 0,
            fill: "#fff",
          }}
          name="Y"
          tick={{ fill: colors.lightBlue300 }}
          type="number"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={data} fill={colors.blueTextAccent} line name="A scatter" />
      </ScatterChart>
    </Flex>
  );
};
