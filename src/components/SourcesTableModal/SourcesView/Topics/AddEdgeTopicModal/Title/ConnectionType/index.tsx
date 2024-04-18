import { FC, useEffect, useState } from 'react'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { getEdgeTypes } from '~/network/fetchSourcesData'

type Props = {
  selectedType: string
  setSelectedType: (option: string) => void
}

export const ConnectionType: FC<Props> = ({ selectedType, setSelectedType }) => {
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getEdgeTypes()

        setOptions(data.edge_types)
      } catch (error) {
        console.warn(error)
      }
    }

    init()
  }, [setOptions])

  const resolveOption = (i: string) => ({ label: i, value: i })

  const handleSelectChange = (option: TAutocompleteOption | null) => {
    setSelectedType(option?.value || '')
  }

  return (
    <AutoComplete
      onSelect={handleSelectChange}
      options={options.map(resolveOption)}
      selectedValue={selectedType ? resolveOption(selectedType) : null}
    />
  )
}
