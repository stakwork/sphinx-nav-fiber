import { getEngagement, getFollowers } from '~/network/tweetAnalyze'
import { SORT_OPTIONS } from '../..'
import { getTweetAnalyzeRequest } from '../utils'

describe('getTweetAnalyzeRequest', () => {
  it('uses the engagement endpoint for engagement sorting', () => {
    expect(getTweetAnalyzeRequest(SORT_OPTIONS.ENGAGEMENT.value)).toBe(getEngagement)
  })

  it('uses the followers endpoint for follower sorting', () => {
    expect(getTweetAnalyzeRequest(SORT_OPTIONS.FOLLOWERS.value)).toBe(getFollowers)
  })
})
