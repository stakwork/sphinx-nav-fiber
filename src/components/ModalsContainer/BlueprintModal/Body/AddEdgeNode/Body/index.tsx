import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'
import styled from 'styled-components'
import { getNodeSchemaTypes, postBluePrintType } from '~/network/fetchSourcesData'

export type FormData = {
  type: string
}

export type Props = {
  onCancel: () => void
}

export const Body = ({ onCancel }: Props) => {
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [selectedFromNode, setSelectedFromNode] = useState<string>('')
  const [selectedToNode, setSelectedToNode] = useState<string>('')

  const typeValue = form.watch('type')

  useEffect(() => {
    setSelectedType(typeValue)
  }, [typeValue])

  const onSubmit = form.handleSubmit(async (data) => {
    if (!selectedToNode || !selectedFromNode) {
      return
    }

    setLoading(true)

    const edgeData = {
      source: selectedFromNode,
      target: selectedToNode,
      edge_type: data.type,
    }

    try {
      if (selectedFromNode === 'all' || selectedToNode === 'all') {
        const nodes = await getNodeSchemaTypes()

        const nodeTypes = nodes.schemas
          .filter((schema) => !schema.is_deleted && schema.type)
          .map((schema) => schema.type)

        if (selectedFromNode === 'all') {
          await Promise.all(nodeTypes.map((source) => postBluePrintType({ ...edgeData, source })))
        } else if (selectedToNode === 'all') {
          await Promise.all(nodeTypes.map((target) => postBluePrintType({ ...edgeData, target })))
        }
      } else {
        await postBluePrintType(edgeData)
      }
    } catch (error) {
      console.warn('API Error:', error)
    } finally {
      setLoading(false)
      onCancel()
    }
  })

  const submitDisabled = loading || !selectedToNode || !selectedFromNode || !selectedType

  return (
    <FormProvider {...form}>
      <form id="add-type-form" onSubmit={onSubmit}>
        <TitleEditor
          selectedFromNode={selectedFromNode}
          selectedToNode={selectedToNode}
          selectedType={selectedType}
          setSelectedFromNode={setSelectedFromNode}
          setSelectedToNode={setSelectedToNode}
        />
        <CustomButton color="secondary" disabled={submitDisabled} onClick={onSubmit} size="large" variant="contained">
          Confirm
          {loading && (
            <ClipLoaderWrapper>
              {' '}
              <ClipLoader color={colors.lightGray} size={12} />{' '}
            </ClipLoaderWrapper>
          )}
        </CustomButton>
      </form>
    </FormProvider>
  )
}

const CustomButton = styled(Button)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`

const ClipLoaderWrapper = styled.span`
  margin-top: 2px;
`
