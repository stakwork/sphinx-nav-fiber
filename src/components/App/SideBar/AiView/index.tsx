import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { colors } from '~/utils/colors'
import { AiSearch } from '../AiSearch'
import { AiSummary } from '../AiSummary'

export const MENU_WIDTH = 390

// eslint-disable-next-line react/display-name
export const AiView = () => {
  const { aiSummaryAnswers, newLoading } = useAiSummaryStore((s) => s)

  return (
    <Wrapper>
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

const ScrollWrapper = styled(Flex)`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  width: 100%;
`
