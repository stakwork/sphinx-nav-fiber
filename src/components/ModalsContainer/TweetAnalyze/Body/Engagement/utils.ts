import { getEngagement, getFollowers } from '~/network/tweetAnalyze'
import { SORT_OPTIONS, SortBy } from '..'

export const getTweetAnalyzeRequest = (sortBy: SortBy) =>
  sortBy === SORT_OPTIONS.FOLLOWERS.value ? getFollowers : getEngagement
