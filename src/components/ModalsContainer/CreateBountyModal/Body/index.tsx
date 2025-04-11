import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SuccessNotify } from '~/components/common/SuccessToast'
import { BountyPayload, postBountyData } from '~/network/postBounty'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { getSignedTimestamp } from '~/utils/getSignedTimestamp'
import { CreateBounty } from '../CreateBounty'

export type FormData = {
  nodeType: string
  budget: string
  workspaceUuid: string
  publicBounty: boolean
} & Partial<{ [k: string]: string }>

interface Props {
  setBounty?: (bounty: BountyPayload) => void
  cancelBounty?: () => void
  loading?: boolean
}

export const Body = ({ setBounty, cancelBounty, loading }: Props) => {
  const [errMessage, setErrMessage] = useState<string>('')
  const { close } = useModal('createBounty')
  const selectedNode = useSelectedNode()
  const { pubKey } = useUserStore()
  const form = useForm<FormData>({ mode: 'onChange' })
  const { handleSubmit, setValue } = form

  const handleClose = () => {
    setValue('budget', '')
    setValue('nodeType', '')
    setValue('workspaceUuid', '')
    setValue('publicBounty', false)

    if (cancelBounty) {
      cancelBounty()
    } else {
      close()
    }
  }

  const onSubmit = async (data: FormData) => {
    const { budget, workspaceUuid, publicBounty } = data

    try {
      const signedToken = await getSignedTimestamp()

      const payload = {
        type: 'code_generation',
        amount: Number(budget),
        workspace_uuid: workspaceUuid || 'ck9drb84nncjnaefo090',
        ref_id: selectedNode?.ref_id as string,
        node_data: selectedNode?.properties || {},
        jwt_token: signedToken,
        pub_key: pubKey,
        public_bounty: publicBounty || false,
      }

      if (setBounty) {
        setBounty(payload)
      } else {
        await postBountyData(payload)
        SuccessNotify('Bounty Created')
      }
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setErrMessage(err)
    } finally {
      setValue('budget', '')
      setValue('nodeType', '')
      setValue('workspaceUuid', '')
      setValue('publicBounty', false)
      close()
    }
  }

  return (
    <FormProvider {...form}>
      <form id="create-bounty-form" onSubmit={handleSubmit(onSubmit)}>
        <CreateBounty errMessage={errMessage} handleClose={handleClose} loading={loading} />
      </form>
    </FormProvider>
  )
}
