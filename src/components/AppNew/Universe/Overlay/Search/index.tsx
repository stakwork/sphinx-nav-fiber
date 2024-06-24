import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'
import { useNavigate } from 'react-router-dom'

export const GraphSearch = () => {
  const [searchTerm, clearSearch] = useAppStore((s) => [s.currentSearch, s.clearSearch])
  const [isLoading] = useGraphStore((s) => [s.isFetching])
  const { setValue, watch } = useFormContext()

  const typing = watch('search')

  const navigate = useNavigate()

  return (
    <SearchWrapper>
      <Search>
        <SearchBar />
        <InputButton
          onClick={() => {
            if (searchTerm) {
              setValue('search', '')
              clearSearch()
              navigate(`/`)

              return
            }

            if (typing.trim() === '') {
              return
            }

            const encodedQuery = typing.replace(/\s+/g, '+')

            navigate(`/search?q=${encodedQuery}`)
          }}
        >
          {!isLoading ? (
            <>{searchTerm ? <ClearIcon /> : <SearchIcon />}</>
          ) : (
            <ClipLoader color={colors.SECONDARY_BLUE} size="20" />
          )}
        </InputButton>
      </Search>
    </SearchWrapper>
  )
}

const SearchWrapper = styled(Flex).attrs({
  direction: 'column',
  justify: 'center',
  align: 'stretch',
})(() => ({
  '&.has-shadow': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    background: colors.BG1,
    boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.20)',
  },
}))

const Search = styled(Flex).attrs({
  direction: 'row',
  justify: 'center',
  align: 'center',
})`
  flex-grow: 1;
  pointer-events: all;
`

const InputButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  font-size: 32px;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${colors.gray200}; */
  }

  ${SearchWrapper} input:focus + & {
    color: ${colors.primaryBlue};
  }
`
