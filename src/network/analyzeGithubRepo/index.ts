import { api } from '~/network/api'
import { NodeExtended } from '~/types'

type GithubRepositoryResponse = {
  functions: NodeExtended[]
}

export const analyzeGitHubRepository = async (githubRepository: string): Promise<GithubRepositoryResponse> => {
  const url = `/github/analyze?github_repository=${githubRepository}&analysis=["coverage"]`

  const res = await api.get<GithubRepositoryResponse>(url)

  return res
}
