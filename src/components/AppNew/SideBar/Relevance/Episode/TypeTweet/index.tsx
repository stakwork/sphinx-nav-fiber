import moment from 'moment'
import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'
import { Date } from '..'

export type Props = {
  text: string
  imageUrl?: string
  twitterHandle?: string
  date: number
  name: string
  verified: boolean
}

export const TypeTweet = ({ text, imageUrl, date, twitterHandle, name, verified }: Props) => (
  <Flex direction="column">
    <Flex align="center" direction="row" pr={16}>
      <PictureWrapper>
        <Avatar rounded size={27} src={imageUrl || ''} type="person" />
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
      <TwitText data-testid="episode-description">{text}</TwitText>
      <Flex data-testid="date-text" direction="row" justify="flex-start">
        {Boolean(date) && <Date>{moment.unix(date).fromNow()}</Date>}
      </Flex>
    </Flex>
  </Flex>
)

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
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`

const TwitterHandle = styled(Flex)`
  color: ${colors.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`

const TwitText = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.2px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`
