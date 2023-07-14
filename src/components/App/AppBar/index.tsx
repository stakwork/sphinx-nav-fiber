import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { SearchBar } from '~/components/SearchBar'
import { Stats } from '~/components/Stats'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useDataStore'
import { media } from '~/utils/media'

export const AppBar = () => {
  const selectedNode = useSelectedNode()

  const [searchTerm, sidebarIsOpen] = useAppStore((s) => [s.currentSearch, s.sidebarIsOpen])

  return !sidebarIsOpen ? (
    <Header>
      <TitleWrapper>
        <Text color="white" kind="bigHeadingBold">
          Second
        </Text>
        <Text color="white" kind="bigHeading">
          Brain
        </Text>
      </TitleWrapper>

      <StatsWrapper>{!selectedNode && !searchTerm && <Stats />}</StatsWrapper>

      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
    </Header>
  ) : null
}

const Header = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
  p: 20,
})`
  height: 60px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  transition: opacity 1s;
`

const TitleWrapper = styled.div`
  ${media.smallOnly`
    display: none;
  `}
`

const StatsWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '25px',
  top: '75px',
  [theme.breakpoints.down('sm')]: {
    top: '130px',
  },
}))

const SearchBarWrapper = styled.div`
  width: 100%;
  margin-left: 30px;
  margin-right: 150px;

  ${media.smallOnly`
    margin: 0 auto;
  `}
`
