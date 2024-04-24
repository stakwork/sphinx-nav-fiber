import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { capitalizeString } from '~/utils/capitalize'
import { OPTIONS, initialValue } from './constants'
import { Props, TOption } from './types'

export const SourceTypeStep: FC<Props> = ({ skipToStep, allowNextStep, onSelectType, selectedType }) => {
  const [customSchemaFlag] = useFeatureFlagStore((s) => [s.customSchemaFlag])
  const [options, setOption] = useState<TOption[] | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const init = async () => {
      if (customSchemaFlag) {
        setLoading(true)

        try {
          const data = await getNodeSchemaTypes()

          const nodeTypesToHide = ['about', 'schema']

          const schemaOptions = data.schemas
            .filter((schema) => schema.ref_id && !nodeTypesToHide.includes(schema.type) && !schema.is_deleted)
            .map((schema) => ({
              label: capitalizeString(schema.type),
              value: schema.type,
              action: () => skipToStep('setAttribues'),
            }))

          setOption(schemaOptions)
        } catch (error) {
          console.warn(error)
        } finally {
          setLoading(false)
        }
      } else {
        setOption([...OPTIONS, initialValue])
      }
    }

    init()
  }, [selectedType, customSchemaFlag, skipToStep])

  const onSelect = (val: TAutocompleteOption | null) => {
    onSelectType(val?.label || '')
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={20}>
        <Flex align="center" direction="row">
          <StyledText>Select Type</StyledText>
        </Flex>
      </Flex>

      <Flex direction="row" mb={20}>
        <AutoComplete autoFocus isLoading={loading} onSelect={onSelect} options={options} />
      </Flex>

      <Flex>
        <Button
          color="secondary"
          disabled={!allowNextStep}
          onClick={() => skipToStep('source')}
          size="large"
          type="button"
          variant="contained"
        >
          Next
        </Button>
      </Flex>
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
