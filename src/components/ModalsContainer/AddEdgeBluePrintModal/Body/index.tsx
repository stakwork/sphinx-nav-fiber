import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'
import styled from 'styled-components'
import { postBluePrintType } from '~/network/fetchSourcesData'

export type FormData = {
  type: string
}

export const Body = () => {
  const { close } = useModal('addEdgeToBluePrint')
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [isSwapped, setIsSwapped] = useState(false)

  const [selectedFromNode, setSelectedFromNode] = useState<string>('')
  const [selectedToNode, setSelectedToNode] = useState<string>('')

  const typeValue = form.watch('type')

  useEffect(() => {
    setSelectedType(typeValue)
  }, [typeValue])

  const closeHandler = () => {
    close()
  }

  const onSubmit = form.handleSubmit(async (data) => {
    if (!selectedToNode || !selectedFromNode) {
      return
    }

    const edgeData = {
      source: selectedFromNode,
      target: selectedToNode,
      edge_type: data.type,
    }

    try {
      await postBluePrintType(edgeData)

      closeHandler()
    } catch (error) {
      console.warn('API Error:', error)
    } finally {
      setLoading(false)
    }
  })

  const submitDisabled = loading || !selectedToNode || !selectedFromNode || !selectedType

  return (
    <FormProvider {...form}>
      <form id="add-type-form" onSubmit={onSubmit}>
        <TitleEditor
          isSwapped={isSwapped}
          selectedFromNode={selectedFromNode}
          selectedToNode={selectedToNode}
          selectedType={selectedType}
          setIsSwapped={() => setIsSwapped(!isSwapped)}
          setSelectedFromNode={setSelectedFromNode}
          setSelectedToNode={setSelectedToNode}
        />
        <CustomButton color="secondary" disabled={submitDisabled} onClick={onSubmit} size="large" variant="contained">
          Confirm
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </CustomButton>
      </form>
    </FormProvider>
  )
}

const CustomButton = styled(Button)`
  width: 293px !important;
  margin: 0 0 10px 35px !important;
`
