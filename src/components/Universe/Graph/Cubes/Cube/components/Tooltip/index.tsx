import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { Guests, Node } from '~/types'
import { colors } from '~/utils/colors'
import { formatDescription } from '~/utils/formatDescription'
import { TwitData } from './Tweet'

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'absolute',
  top: '65px',
  right: '55px',
  width: '300px',
  pointerEvents: 'none',
  background: colors.dashboardHeader,
  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
  color: colors.primaryText1,
  zIndex: 100,
  transition: 'opacity 0.6s',
  padding: theme.spacing(2, 3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 1.5),
  },
}))

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
    type,
    name,
    twitter_handle: twitterHandle,
    image_url: imageUrl,
    guests: guestArray,
  } = node

  const guests = guestArray && guestArray.length > 0

  const isGuestArrObj = guests && typeof guestArray[0] === 'object'

  let displayImageUrl = imageUrl

  if (nodeType === 'guest' && !imageUrl) {
    displayImageUrl = 'person_placeholder2.png'
  }

  if (type === 'twitter_space') {
    displayImageUrl = 'twitter_placeholder.png'
  }

  if (nodeType === 'topic') {
    return null
  }

  return (
    <Wrapper borderRadius={8} px={24} py={16}>
      {nodeType === 'tweet' ? (
        <TwitData twitterHandle={twitterHandle} />
      ) : (
        <>
          <Flex direction="row">
            {displayImageUrl && <Divider />}
            <Flex align="flex-start" pb={12}>
              <Text>{nodeType?.toUpperCase()}</Text>
            </Flex>
          </Flex>

          <Flex direction="row">
            {displayImageUrl && (
              <Flex pr={12}>
                <Avatar src={displayImageUrl as string} type="person" />
              </Flex>
            )}

            <div>
              {(name || label) && (
                <Flex direction="column">
                  {name ? (
                    <Text>{name}</Text>
                  ) : (
                    <>
                      <Text>{label}</Text>
                      {text && (
                        <Flex pt={4}>
                          <Text color="primaryText1" kind="tiny">
                            @{text}
                          </Text>
                        </Flex>
                      )}
                    </>
                  )}
                </Flex>
              )}

              {showTitle && (
                <Text color="primaryText1" kind="tiny">
                  {showTitle}
                </Text>
              )}

              {episodeTitle && (
                <Flex pt={4}>
                  <Text color="primaryText1" kind="tiny">
                    {episodeTitle}
                  </Text>
                </Flex>
              )}

              {description && (
                <Flex pt={12}>
                  <Text as="div" kind="regularBold">
                    {formatDescription(description)}
                  </Text>
                </Flex>
              )}

              {twitterHandle && (
                <Flex pt={4}>
                  <Text color="primaryText1" kind="tiny">
                    @{twitterHandle}
                  </Text>
                </Flex>
              )}

              {guestArray && guestArray.length > 0 && (
                <Flex pt={12}>
                  <Text color="primaryText1">People</Text>
                  <Flex pt={4}>
                    <Text color="primaryText1" kind="tiny">
                      {guests && (
                        <Flex pt={12}>
                          <Text>Guests:</Text>
                          <Text>
                            {isGuestArrObj
                              ? (guestArray as Guests[]).map((guest) => `@${guest?.twitter_handle}`).join(', ')
                              : guestArray.join(', ')}
                          </Text>
                        </Flex>
                      )}
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
