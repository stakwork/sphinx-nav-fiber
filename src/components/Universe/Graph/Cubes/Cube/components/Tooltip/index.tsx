import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { Guests, Node } from '~/types'
import { colors } from '~/utils/colors'
import { formatDescription } from '~/utils/formatDescription'
import { TwitData } from './Tweet'

const Wrapper = styled(Flex)`
  position: absolute;
  pointer-events: none;
  background: ${colors.dashboardHeader};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  color: ${colors.primaryText1};
  z-index: 100;
  transition: opacity 0.6s;

  bottom: 20px;
  right: 20px;
  width: 300px;
`

const Divider = styled(Flex)`
  width: 22.5%;
`

type Props = {
  node: Node | null
}

export const Tooltip = ({ node }: Props) => {
  if (!node) {
    return null
  }

  const {
    node_type: nodeType,
    show_title: showTitle,
    episode_title: episodeTitle,
    description,
    label,
    text,
    timestamp,
    type,
    tweet_id: tweetId,
    twitter_handle: twitterHandle,
  } = node

  const guestArray = node.guests

  let guests = false
  let isGuestArrObj = false

  if (guestArray) {
    if (guestArray.length && guestArray[0] !== null) {
      guests = true
    }

    if (typeof guestArray[0] === 'object') {
      isGuestArrObj = true
    }
  }

  let imageUrl = node.image_url

  if (type === 'twitter_space') {
    imageUrl = 'twitter_spaces_img.png'
  }

  if (imageUrl == null) {
    switch (nodeType) {
      case 'guest':
        imageUrl = 'person_placeholder2.png'
        break
      default:
        imageUrl = 'noimage.jpeg'
    }
  }

  return (
    <Wrapper borderRadius={8} px={24} py={16}>
      {nodeType === 'tweet' ? (
        <TwitData tweetId={tweetId} twitterHandle={twitterHandle} />
      ) : (
        <>
          <Flex direction="row">
            <Divider />
            <Flex align="flex-start" pb={12}>
              <Text>{nodeType?.toUpperCase()}</Text>
            </Flex>
          </Flex>

          <Flex direction="row">
            <Flex pr={12}>
              <Avatar src={imageUrl} />
            </Flex>

            <div>
              {type === 'guest' ? (
                <Flex direction="column">
                  <Text>{label}</Text>
                  {text && (
                    <Flex pt={4}>
                      <Text color="primaryText1" kind="tiny">
                        @{text}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              ) : (
                <Text color="primaryText1" kind="tiny">
                  {showTitle}
                </Text>
              )}

              <Flex pt={4}>
                {nodeType === 'clip' || (nodeType === 'episode' && <Text color="primaryText1">Episode</Text>)}

                {nodeType === 'clip' ? (
                  <Text as="div" kind="regularBold">
                    {formatDescription(description)}
                  </Text>
                ) : (
                  <Text color="primaryText1" kind="tiny">
                    {episodeTitle}
                  </Text>
                )}
              </Flex>

              <Text color="primaryText1" kind="tiny">
                {timestamp}
              </Text>

              <Flex pt={12}>
                {nodeType === 'clip' && <Text color="primaryText1">Episode</Text>}

                <Text color="primaryText1" kind="tiny">
                  {nodeType === 'clip' ? episodeTitle : formatDescription(description)}
                </Text>
              </Flex>

              {guests && (
                <Flex pt={12}>
                  <Text color="primaryText1">People</Text>
                  <Flex pt={4}>
                    <Text color="primaryText1" kind="tiny">
                      {isGuestArrObj
                        ? (guestArray as Guests[])
                            .map((guest) => {
                              if (guest.name) {
                                return guest.name
                              }

                              return `@${guest.twitter_handle}`
                            })
                            .join(', ')
                        : guestArray?.join(', ')}
                    </Text>
                  </Flex>
                </Flex>
              )}
            </div>
          </Flex>
        </>
      )}
    </Wrapper>
  )
}
