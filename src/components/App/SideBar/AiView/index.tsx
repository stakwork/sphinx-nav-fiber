import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ArrowBackIcon from '~/components/Icons/ArrowBackIcon'
import { Flex } from '~/components/common/Flex'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { AiSearch } from '../AiSearch'
import { AiSummary } from '../AiSummary'

export const MENU_WIDTH = 390

// eslint-disable-next-line react/display-name
export const AiView = () => {
  const { aiSummaryAnswers, resetAiSummaryAnswer, newLoading, setNewLoading } = useAiSummaryStore((s) => s)
  const { abortFetchData, fetchData, setAbortRequests } = useDataStore((s) => s)
  const [setBudget] = useUserStore((s) => [s.setBudget])
  const navigate = useNavigate()

  const handleCloseAi = async () => {
    setNewLoading(null)
    abortFetchData()
    resetAiSummaryAnswer()
    navigate('/')

    await fetchData(setBudget, setAbortRequests)
  }

  return (
    <Wrapper>
      <Flex align="flex-start">
        <Flex p={24}>
          <Button onClick={handleCloseAi} startIcon={<ArrowBackIcon />}>
            Home
          </Button>
        </Flex>
      </Flex>
      <ScrollWrapper>
        <Flex>
          {Object.keys(aiSummaryAnswers)
            .filter((key) => aiSummaryAnswers[key].shouldRender)
            .map((i: string) => (
              <AiSummary
                key={i}
                question={aiSummaryAnswers[i]?.question || ''}
                refId={i}
                response={aiSummaryAnswers[i]}
              />
            ))}
          {newLoading && <AiSummary question={newLoading.question || ''} refId="" response={newLoading} />}
        </Flex>
      </ScrollWrapper>
      <AiSearch />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  background: colors.BG1,
  flex: 1,
  width: '100%',
  zIndex: 30,
  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
  },
}))

const ScrollWrapper = styled(Flex)(() => ({
  overflow: 'auto',
  flex: 1,
  width: '100%',
}))
