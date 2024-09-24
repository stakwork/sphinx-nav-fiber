import { FormProvider, useForm } from 'react-hook-form'
import { useModal } from '~/stores/useModalStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { postBountyData } from '~/network/postBounty'
import { useState } from 'react'
import * as React from 'react'
import { CreateBounty } from '../CreateBounty'

export type FormData = {
  nodeType: string
  budget: string
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
    close()
  }

  const onSubmit = async (data: FormData) => {
    const { budget, nodeType } = data

    const nodeData = { name: nodeType }

    const payload = {
      type: 'code_generation',
      amount: Number(budget),
      workspace_uuid: 'ck9drb84nncjnaefo090',
      jwt_token: 'abced-12345',
      ref_id: selectedNode?.ref_id as string,
      node_data: nodeData,
    }

    try {
      await postBountyData(payload)
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setErrMessage(err)
    } finally {
      setValue('budget', '')
      setValue('nodeType', '')
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
