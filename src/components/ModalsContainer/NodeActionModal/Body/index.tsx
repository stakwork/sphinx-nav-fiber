import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { SuccessNotify } from '~/components/common/SuccessToast'
import { Text } from '~/components/common/Text'
import { getActionDetails, postNodeAction } from '~/network/actions'
import { BountyPayload } from '~/network/postBounty'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { ActionDetail } from '~/types'
import { colors } from '~/utils'
import { Body as BountyBody } from '../../CreateBountyModal/Body'

export const Body = () => {
  const [errMessage, setErrMessage] = useState<string>('')
  const [loadingPage, setLoadingPage] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [steps, setSteps] = useState<number>(0)
  const [actions, setActions] = useState<ActionDetail[]>([])
  const [selectedAction, setSelectedAction] = useState<ActionDetail>()
  const [bounty, setBounty] = useState<BountyPayload | null>(null)
  const { close } = useModal('nodeAction')
  const selectedNode = useSelectedNode()
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  function handleActionClicked(action: ActionDetail) {
    // set selected Action to state
    setSelectedAction(action)

    if (action.bounty) {
      setSteps(2)
    } else {
      setSteps(3)
    }
  }

  const handleSetBounty = (bountyPayload: BountyPayload) => {
    setBounty(bountyPayload)
    setSteps(3)
  }

  const cancelBounty = () => {
    setSteps(1)
    setErrMessage('')
  }

  const handleActionClose = () => {
    close()
  }

  useEffect(() => {
    // get actions from backend
    async function handleGetActionDetails() {
      const nodeType = selectedNode?.node_type

      if (!nodeType) {
        return
      }

      try {
        const res = await getActionDetails(normalizedSchemasByType[nodeType].action!)

        setActions(res.actions)

        setSteps(1)

        setLoadingPage(false)
      } catch (error) {
        console.error(error)
      }
    }

    handleGetActionDetails()
  }, [normalizedSchemasByType, selectedNode])

  const handleSubmit = async () => {
    setLoading(true)

    if (!selectedAction) {
      setErrMessage('Node Action not selected')

      return
    }

    try {
      const payload = {
        ref_id: selectedNode?.ref_id || '',
        action_name: selectedAction.name,
        bounty,
      }

      await postNodeAction(payload)

      close()
      SuccessNotify('Node Action Submited Successfully')
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const newError = await err?.json()

      if (newError) {
        setErrMessage(newError.message || newError.errorCode)

        return
      }

      setErrMessage('Unable to submit node action')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loadingPage && (
        <ClipLoaderWrapper>
          <ClipLoader color={colors.lightGray} size={50} />{' '}
        </ClipLoaderWrapper>
      )}
      {steps === 1 && (
        <Flex mb={16} mt={16}>
          {actions.map((action) => (
            <StyledText key={action.name} onClick={() => handleActionClicked(action)}>
              {action.display_name}
            </StyledText>
          ))}
        </Flex>
      )}
      {steps === 2 && <BountyBody cancelBounty={cancelBounty} setBounty={handleSetBounty} />}
      {steps === 3 && (
        <Flex mb={16} mt={16}>
          <StyledText>Are you sure you want to Submit this action?</StyledText>
          <Flex direction="row" mt={32}>
            <Flex grow={1}>
              <Button color="error" onClick={handleActionClose} size="large" variant="contained">
                Cancel
              </Button>
            </Flex>
            <Flex grow={1} ml={20}>
              <Button
                color="secondary"
                disabled={loading}
                onClick={handleSubmit}
                size="large"
                type="submit"
                variant="contained"
              >
                Confirm
              </Button>
            </Flex>
          </Flex>

          {errMessage && <StyledError>{errMessage}</StyledError>}
        </Flex>
      )}
    </>
  )
}

const ClipLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

const StyledText = styled(Text)`
  font-size: 1.2rem;
  font-family: 'Barlow';
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    color: ${colors.GRAY3};
  }
`

const StyledError = styled(Flex)`
  font-size: 0.8125rem;
  font-family: 'Barlow';
  color: #ff8f80;
  line-height: 0.2px;
  margin-top: 0.75rem;
  padding-top: 1.25rem;
  align-items: center;
`
