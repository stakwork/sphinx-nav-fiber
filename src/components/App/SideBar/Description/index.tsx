import styled from 'styled-components'
import NotesIcon from '~/components/Icons/NotesIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { highlightSearchTerm } from '../Relevance/Episode'

type DescriptionProps = {
  stateless?: boolean
  node: NodeExtended | null
  searchTerm: string | null
}

export const Description = ({ stateless, node, searchTerm }: DescriptionProps) => (
  <Flex grow={1} shrink={1}>
    <Header>
      {stateless && (
        <Heading>
          <div className="icon">
            <NotesIcon />
          </div>
          <div className="title">Description</div>
        </Heading>
      )}
    </Header>
    <Text>{node?.description ? highlightSearchTerm(node.description, searchTerm) : '...'}</Text>
  </Flex>
)

const Heading = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
})`
  .icon {
    font-size: 16px;
    color: ${colors.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${colors.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`

const Header = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  margin-bottom: 18px;
`
