import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { SearchBar } from '~/components/SearchBar'
import { Stats } from '~/components/Stats'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useDataStore'
import { media } from '~/utils/media'

type Props = {
  onSubmit?: () => void
}

export const AppBar = ({ onSubmit }: Props) => {
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
        <SearchBar onSubmit={onSubmit} />
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

const StatsWrapper = styled.div`
  left: 25px;
  position: absolute;
  top: 75px;
`

const SearchBarWrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  ${media.smallOnly`
    width: 100%;
  `}
`
