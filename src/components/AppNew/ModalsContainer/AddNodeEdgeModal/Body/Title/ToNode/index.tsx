import { FC } from 'react'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore } from '~/stores/useGraphStore'

type Props = {
  onSelect: (topic: NodeExtendedNew | null) => void
  selectedValue: NodeExtendedNew | null
}

export const ToNode: FC<Props> = ({ onSelect, selectedValue }) => {
  const [options = []] = useGraphStore((s) => [s?.data?.nodes])

  const handleSelect = (val: TAutocompleteOption | null) => {
    const option = val ? options.find((i) => i.ref_id === val.value) : null

    onSelect(option || null)
  }

  const resolveOption = (i: NodeExtendedNew) => ({ label: i.name as string, value: i.ref_id, type: i.node_type })

  const resolveOptions = (values: NodeExtendedNew[]) => values.map(resolveOption)

  return (
    <AutoComplete
      onSelect={handleSelect}
      options={resolveOptions(options)}
      selectedValue={selectedValue ? resolveOption(selectedValue) : null}
    />
  )
}
