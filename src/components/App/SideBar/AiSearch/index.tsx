import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { useAiSummaryStore, useHasAiChatsResponseLoading } from '~/stores/useAiSummaryStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { useUserStore } from '~/stores/useUserStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'

export const AiSearch = ({ contextSearch }: { contextSearch?: boolean }) => {
  const form = useForm<{ search: string }>({ mode: 'onChange' })
  const { setAbortRequests } = useDataStore((s) => s)
  const { setBudget } = useUserStore((s) => s)
  const { reset } = form
  const fetchAIData = useAiSummaryStore((s) => s.fetchAIData)
  const { selectedNode } = useGraphStore((s) => s)
  const normalizedSchemasByType = useSchemaStore((s) => s.normalizedSchemasByType)

  const isLoading = useHasAiChatsResponseLoading()

  let context = ''

  function getNodeKeyDetails(nodeKey: string | undefined, currentSelectedNode: NodeExtended) {
    let nodeKeyContextString = ''

    if (!nodeKey) {
      return nodeKeyContextString
    }

    const nodeKeyArr = nodeKey.split('-')

    for (let i = 0; i < nodeKeyArr.length; i += 1) {
      const key = nodeKeyArr[i]
      const propertyValue = currentSelectedNode.properties ? currentSelectedNode.properties[key] : ''
      const comma = i === nodeKeyArr.length - 1 ? '' : ','

      nodeKeyContextString = `${nodeKeyContextString} ${key} - ${propertyValue}${comma}`
    }

    return nodeKeyContextString
  }

  const handleSubmit = form.handleSubmit(({ search }) => {
    if (search.trim() === '') {
      return
    }

    if (contextSearch && selectedNode) {
      const nodeType = selectedNode.node_type

      const nodeKey = normalizedSchemasByType[nodeType].node_key

      const nodeKeyContextString = getNodeKeyDetails(nodeKey, selectedNode)

      context = `**${nodeType}: ${nodeKeyContextString}**`
    }

    fetchAIData(setBudget, setAbortRequests, search, undefined, context)
    reset({ search: '' })
  })

  return (
    <AiSearchWrapper>
      <FormProvider {...form}>
        <Search>
          <SearchBar
            loading={isLoading}
            onSubmit={handleSubmit}
            placeholder={contextSearch ? 'Ask a question' : 'Ask follow-up'}
          />
          <InputButton
            data-testid="search-ai_action_icon"
            onClick={() => {
              if (isLoading) {
                return
              }

              handleSubmit()
            }}
          >
            {contextSearch && <SearchIcon />}
            {!contextSearch &&
              (!isLoading ? (
                <SearchIcon />
              ) : (
                <StyledClipLoader color={colors.lightGray} data-testid="loader" size="20" />
              ))}
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

  ${AiSearchWrapper} input:focus + & {
    color: ${colors.primaryBlue};
  }
`

const StyledClipLoader = styled(ClipLoader)`
  margin-right: 10px;
`
