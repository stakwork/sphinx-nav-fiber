import StyledSelect from "~/components/Select";
import { useDataStore } from "~/stores/useDataStore";
import { nodeTypes } from "~/types";

type Option = {
  label: string;
  value: number;
};

const NODE_TYPES_MAPPER = {
  clip: 'Clip',
  data_series: 'Data series',
  episode: 'Episode',
  guest: 'Person',
  show: 'Show',
  topic: 'Topic',
  tweet_data: 'Tweet data',
};

const options = nodeTypes.map((i, index) => ({ label: NODE_TYPES_MAPPER[i], value: index }));

export const CategorySelect = () => {
  const [categoryFilter, setCategoryFilter] = useDataStore((s) => [s.categoryFilter, s.setCategoryFilter]);

  const selectedValue = categoryFilter ?
    [{
      label: NODE_TYPES_MAPPER[categoryFilter],
      value: nodeTypes.findIndex((i) => i === categoryFilter),
    }] : [];

  return (
    <StyledSelect
      className={selectedValue.length ? 'hasSelected' : ''}
      clearable
      onChange={(values) => {
        setCategoryFilter(
          values.length ? nodeTypes[(values[0] as Option).value] : null,
        );
      }}
      options={options}
      placeholder="Select node type"
      searchable={false}
      values={selectedValue}
    />
  );};
