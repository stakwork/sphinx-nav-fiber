import { Button } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import styled from 'styled-components'
import { Booster } from '~/components/Booster'
import LinkIcon from '~/components/Icons/LinkIcon'
import { Avatar } from '~/components/common/Avatar'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { highlightSearchTerm } from '~/components/common/Highlight/Highlight'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { BoostAmt } from '../../Helper/BoostAmt'
import { Date } from '../Relevance/Episode'

export const TwitData = () => {
  const selectedNode = useSelectedNode()

  const {
    date,
    boost,
    text,
    name,
    verified,
    image_url: profilePicture,
    twitter_handle: twitterHandle,
    ref_id: refId,
  } = selectedNode || {}

  const twitId: string = selectedNode?.tweet_id || ''
  const [boostAmount, setBoostAmount] = useState<number>(boost || 0)

  const searchTerm = useAppStore((s) => s.currentSearch)

  return (
    selectedNode && (
      <>
        <Flex direction="column" p={24}>
          <Flex align="center" direction="row" pr={16}>
            <PictureWrapper>
              <Avatar rounded size={58} src={profilePicture || ''} type="person" />
            </PictureWrapper>
            <Flex>
              <Name align="center" direction="row">
                {name}
                {verified && (
                  <div className="verification">
                    <img alt="verified" src="verified_twitter.svg" />
                  </div>
                )}
              </Name>
              {twitterHandle && <TwitterHandle>@{twitterHandle}</TwitterHandle>}
            </Flex>
          </Flex>

          <Flex grow={1} shrink={1}>
            <TwitText data-testid="episode-description">{highlightSearchTerm(text || '', searchTerm)}</TwitText>
            <Flex direction="row" justify="flex-start">
              {!!date && <Date>{moment.unix(date).format('ll')}</Date>}
            </Flex>
          </Flex>
          <Flex align="stretch" mt={22}>
            <a
              href={`https://twitter.com/${twitterHandle}/status/${twitId}?open=system`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <StyledButton endIcon={<LinkIcon />}>View Tweet</StyledButton>
            </a>
          </Flex>
        </Flex>
        <StyledDivider />
        <Flex direction="row" justify="space-between" pt={14} px={24}>
          <BoostAmt amt={boostAmount} />
          <Booster content={selectedNode} count={boostAmount} refId={refId} updateCount={setBoostAmount} />
        </Flex>
      </>
    )
  )
}

const PictureWrapper = styled(Flex)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`

const Name = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`

const TwitterHandle = styled(Flex)`
  color: ${colors.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const TwitText = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.39px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`

const StyledDivider = styled(Divider)`
  margin: 0 0 6px 0;
  opacity: 75%;
`

const StyledButton = styled(Button)`
  width: 100%;
`
