import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'
import LinkIcon from '~/components/Icons/LinkIcon'
import { Date, StyledLink } from '~/components/App/SideBar/Relevance/Episode'
import moment from 'moment/moment'

type Props = {
  title: string
  imageUrl?: string
  date: number
  name: string
  sourceLink?: string
}

export const TypePerson = ({ title, imageUrl, name, sourceLink, date }: Props) => (
  <Flex grow={1} shrink={1}>
    <Flex align="center" direction="row" justify="space-between">
      <Flex align="center" direction="row">
        <PictureWrapper>
          <Avatar rounded size={64} src={imageUrl || ''} type="person" />
        </PictureWrapper>
        {(title || name) && <Name>{title || name}</Name>}
      </Flex>
      {!sourceLink && (
        <StyledLink
          href={`${sourceLink}${sourceLink?.includes('?') ? '&' : '?'}open=system`}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          <LinkIcon />
        </StyledLink>
      )}
    </Flex>
    <Flex align="center" direction="row" justify="flex-start" ml={6} mt={9}>
      {Boolean(date) && <Date>{moment.unix(date).fromNow()}</Date>}
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
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`
