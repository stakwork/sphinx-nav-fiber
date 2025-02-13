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
import { useUserStore } from '~/stores/useUserStore'
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
  const { close } = useModal('nodeAction')
  const selectedNode = useSelectedNode()
  const { normalizedSchemasByType, getSelectedActionDetail, removeSelectedActionDetail } = useSchemaStore((s) => s)
  const { pubKey } = useUserStore()

  async function handleActionClicked(action: ActionDetail) {
    // set selected Action to state
    setSelectedAction(action)

    if (action.bounty) {
      setSteps(2)

      return
    }

    await handleSubmit(action, null)
  }

  const handleSetBounty = async (bountyPayload: BountyPayload) => {
    if (selectedAction) {
      await handleSubmit(selectedAction, bountyPayload)

      return
    }

    setErrMessage('Node Action not selected')
  }

  const cancelBounty = () => {
    setErrMessage('')
    removeSelectedActionDetail()
    close()
  }

  const handleSubmit = async (action: ActionDetail, bountyPayload: BountyPayload | null) => {
    if (!action) {
      setErrMessage('Node Action not selected')

      return
    }

    setLoading(true)

    try {
      const payload = {
        ref_id: selectedNode?.ref_id || '',
        pubkey: pubKey,
        action_name: action.name,
        bounty: bountyPayload,
      }

      await postNodeAction(payload)

      close()
      SuccessNotify('Submitted')
      removeSelectedActionDetail()
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

    const selectedActionFromStore = getSelectedActionDetail()

    if (!selectedActionFromStore) {
      handleGetActionDetails()

      return
    }

    setSelectedAction(selectedActionFromStore)

    if (selectedActionFromStore.bounty) {
      setSteps(2)
    } else {
      handleSubmit(selectedActionFromStore, null)
    }

    setLoadingPage(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedSchemasByType, selectedNode, getSelectedActionDetail])

  return (
    <>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <StyledHeadingText>{selectedAction?.display_name}</StyledHeadingText>
      </Flex>
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
      {steps === 2 && <BountyBody cancelBounty={cancelBounty} loading={loading} setBounty={handleSetBounty} />}

      {errMessage && <StyledError>{errMessage}</StyledError>}
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

const StyledHeadingText = styled(Text)`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 6px;
`
