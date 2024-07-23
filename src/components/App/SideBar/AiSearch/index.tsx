import { FormProvider, useForm } from 'react-hook-form'
import styled from 'styled-components'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils'

export const AiSearch = () => {
  const form = useForm<{ search: string }>({ mode: 'onChange' })
  const { fetchData, setAbortRequests } = useDataStore((s) => s)
  const { setBudget } = useUserStore((s) => s)
  const { reset } = form

  const handleSubmit = form.handleSubmit(({ search }) => {
    if (search.trim() === '') {
      return
    }

    fetchData(setBudget, setAbortRequests, search)
    reset({ search: '' })
  })

  return (
    <AiSearchWrapper>
      <FormProvider {...form}>
        <Search>
          <SearchBar onSubmit={handleSubmit} placeholder="Ask follow-up" />
          <InputButton
            data-testid="search-ai_action_icon"
            onClick={() => {
              handleSubmit()
            }}
          >
            <SearchIcon />
          </InputButton>
        </Search>
      </FormProvider>
    </AiSearchWrapper>
  )
}

const AiSearchWrapper = styled(Flex)`
  position: sticky;
  bottom: 0;
  padding: 12px;
  border-top: 1px solid ${colors.black};
`

const Search = styled(Flex).attrs({
  direction: 'row',
  justify: 'center',
  align: 'center',
})`
  flex-grow: 1;
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
`
