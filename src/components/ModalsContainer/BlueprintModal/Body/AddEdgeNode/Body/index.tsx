import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'
import styled from 'styled-components'
import { deleteEdgeType, postBluePrintType, updateEdgeType, getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { Flex } from '~/components/common/Flex'

export type FormData = {
  type: string
}

export type Props = {
  onCancel: () => void
  edgeLinkData?: { refId: string; edgeType: string; source: string; target: string }
  setGraphLoading: (b: boolean) => void
}

export const Body = ({ onCancel, edgeLinkData, setGraphLoading }: Props) => {
  const form = useForm<FormData>({ mode: 'onChange' })
  const { setValue, getValues } = form
  const [loading, setLoading] = useState(false)
  const [onDeleteLoading, setOnDeleteLoading] = useState(false)

  const [selectedType, setSelectedType] = useState('')
  const [selectedFromNode, setSelectedFromNode] = useState<string>('')
  const [selectedToNode, setSelectedToNode] = useState<string>('')

  const typeValue = form.watch('type')

  useEffect(() => {
    setValue('type', edgeLinkData?.edgeType as string)
  }, [edgeLinkData?.edgeType, setValue])

  useEffect(() => {
    setSelectedType(typeValue)
  }, [typeValue])

  const onSubmit = form.handleSubmit(async (data) => {
    setLoading(true)
    setGraphLoading(true)

    const edgeData = {
      source: selectedFromNode,
      target: selectedToNode,
      edge_type: data.type,
    }

    const updateEdgeTypeData = {
      ref_id: edgeLinkData?.refId,
      edge_type: data.type,
    }

    try {
      if (edgeLinkData?.refId) {
        await updateEdgeType(updateEdgeTypeData)
      } else if (selectedToNode && selectedFromNode) {
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
      }
    } catch (error) {
      console.warn('API Error:', error)
    } finally {
      setLoading(false)
      setGraphLoading(false)
      setSelectedFromNode('')
      setSelectedToNode('')
      onCancel()
    }
  })

  const type = getValues()?.type?.trim()

  const isEdgeLinkChange = type && edgeLinkData?.edgeType?.trim() !== type

  const submitDisabled = edgeLinkData?.refId
    ? loading || !isEdgeLinkChange
    : loading || !selectedToNode || !selectedFromNode || !selectedType

  const handleDelete = async () => {
    setOnDeleteLoading(true)
    setGraphLoading(true)

    try {
      if (edgeLinkData?.refId) {
        await deleteEdgeType(edgeLinkData?.refId)
      }
    } catch (error) {
      console.warn('API Error:', error)
    } finally {
      setOnDeleteLoading(false)
      setGraphLoading(false)
      setSelectedFromNode('')
      setSelectedToNode('')
      onCancel()
    }
  }

  return (
    <FormProvider {...form}>
      <form id="add-type-form" onSubmit={onSubmit}>
        <TitleEditor
          edgeLinkData={edgeLinkData}
          selectedFromNode={selectedFromNode}
          selectedToNode={selectedToNode}
          selectedType={selectedType}
          setSelectedFromNode={setSelectedFromNode}
          setSelectedToNode={setSelectedToNode}
        />
        <Flex direction="row" justify="space-between" mt={20}>
          {edgeLinkData?.refId && (
            <Flex direction="column">
              <DeleteButton
                color="secondary"
                disabled={onDeleteLoading}
                onClick={handleDelete}
                size="large"
                style={{ marginRight: 20 }}
                variant="contained"
              >
                Delete
                {onDeleteLoading && (
                  <ClipLoaderWrapper>
                    <ClipLoader color={colors.lightGray} size={12} />{' '}
                  </ClipLoaderWrapper>
                )}
              </DeleteButton>
            </Flex>
          )}

          <CustomButton color="secondary" disabled={submitDisabled} onClick={onSubmit} size="large" variant="contained">
            Confirm
            {loading && (
              <ClipLoaderWrapper>
                <ClipLoader color={colors.lightGray} size={12} />{' '}
              </ClipLoaderWrapper>
            )}
          </CustomButton>
        </Flex>
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

const DeleteButton = styled(Button)`
  && {
    color: ${colors.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`
