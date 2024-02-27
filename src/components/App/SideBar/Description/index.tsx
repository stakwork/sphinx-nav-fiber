import styled from 'styled-components'
import NotesIcon from '~/components/Icons/NotesIcon'
import { Flex } from '~/components/common/Flex'
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
    <Box>{node?.description ? highlightSearchTerm(node.description, searchTerm) : '...'}</Box>
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

const Box = styled(Flex)`
  color: ${colors.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`
