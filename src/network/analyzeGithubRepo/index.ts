import { api } from '~/network/api'
import { NodeExtended } from '~/types'

type GithubRepositoryResponse = {
  functions: NodeExtended[]
}

export const analyzeGitHubRepository = async (githubRepository: string): Promise<GithubRepositoryResponse> => {
  const url = `/git/analyze?git_repository=${githubRepository}&analysis=["coverage"]`

  const res = await api.get<GithubRepositoryResponse>(url)

  return res
}
