import { SubmitErrRes } from '~/types'
import { api } from '../api'

export const postNewItem = async (
  endpoint: string,
  data: Record<string, unknown>,
  lsatToken = '',
): Promise<SubmitErrRes> => {
  const response = await api.post(`/${endpoint}`, JSON.stringify(data), {
    Authorization: lsatToken,
  })

  return response as SubmitErrRes
}

export const postNewNodeItem = async (
  nodeType: string,
  nodeData: Record<string, unknown>,
  sourceLink: string | undefined,
  typeName: string,
  lsatToken: string,
  pubkey: string,
): Promise<SubmitErrRes> => {
  const endpoint = nodeType === 'Create custom type' ? 'schema' : 'node'

  const body: Record<string, unknown> = {
    node_data: { ...nodeData, ...(nodeType === 'Image' && { source_link: sourceLink }) },
    node_type: nodeType,
    name: typeName,
    pubkey,
  }

  return postNewItem(endpoint, body, lsatToken)
}
