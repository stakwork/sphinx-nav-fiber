import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SuccessNotify } from '~/components/common/SuccessToast'
import { postBountyData } from '~/network/postBounty'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { getSignedTimestamp } from '~/utils/getSignedTimestamp'
import { CreateBounty } from '../CreateBounty'

export type FormData = {
  nodeType: string
  budget: string
  workspaceUuid: string
} & Partial<{ [k: string]: string }>

export const Body = () => {
  const [errMessage, setErrMessage] = useState<string>('')
  const { close } = useModal('createBounty')
  const selectedNode = useSelectedNode()
  const form = useForm<FormData>({ mode: 'onChange' })
  const { handleSubmit, setValue } = form

  const handleClose = () => {
    setValue('budget', '')
    setValue('nodeType', '')
    setValue('workspaceUuid', '')
    close()
  }

  const onSubmit = async (data: FormData) => {
    const { budget, workspaceUuid } = data

    try {
      const signedToken = await getSignedTimestamp()

      const payload = {
        type: 'code_generation',
        amount: Number(budget),
        workspace_uuid: workspaceUuid || 'ck9drb84nncjnaefo090',
        ref_id: selectedNode?.ref_id as string,
        node_data: selectedNode?.properties || {},
        jwt_token: signedToken,
      }

      await postBountyData(payload)
      SuccessNotify('Bounty Created')
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setErrMessage(err)
    } finally {
      setValue('budget', '')
      setValue('nodeType', '')
      setValue('workspaceUuid', '')
      handleClose()
    }
  }

  return (
    <FormProvider {...form}>
      <form id="create-bounty-form" onSubmit={handleSubmit(onSubmit)}>
        <CreateBounty errMessage={errMessage} handleClose={handleClose} />
      </form>
    </FormProvider>
  )
}
