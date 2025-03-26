import { Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { FlexboxProps } from '~/components/common/Flex/flexbox'
import { Text } from '~/components/common/Text'
import AiSummaryIcon from '~/components/Icons/AiSummaryIcon'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

type EpisodeWrapperProps = FlexboxProps & {
  isSelected?: boolean
}

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'column',
})<EpisodeWrapperProps>`
  padding: 15px 24px 24px 24px;
  cursor: pointer;
  background: ${colors.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }
`

const StyledSkeleton = styled(Skeleton)`
  && {
    background: #353a46;
    border-radius: 0.5rem;
  }
`

const SkeletonWrapper = styled(Flex)`
  gap: 1.1875rem;
  margin-top: 1rem;
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 0.5rem;
`

const Title = styled(Text)`
  font-weight: 600;
  font-size: 0.9375rem;
`

const LogMessage = styled(Text)`
  font-size: 0.875rem;
  color: ${colors.white};
  margin-top: 0.5rem;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const height = 8

const fullWidth = 332

export const AiSummarySkeleton = () => {
  const [currentMessage, setCurrentMessage] = useState<string>('Generating answer...')
  const [currentTitle, setCurrentTitle] = useState<string>('Answer')
  const runningProjectMessages = useDataStore((s) => s.runningProjectMessages)

  useEffect(() => {
    if (runningProjectMessages.length > 0) {
      try {
        const lastMessage = runningProjectMessages[runningProjectMessages.length - 1]
        const parsedMessage = JSON.parse(lastMessage)

        if (parsedMessage.type === 'on_step_start' || parsedMessage.type === 'on_step_complete') {
          setCurrentMessage(parsedMessage.message || 'Processing...')

          if (parsedMessage.skill_type) {
            const skillType = parsedMessage.skill_type.charAt(0).toUpperCase() + parsedMessage.skill_type.slice(1)

            setCurrentTitle(`${skillType} in progress`)
          }
        }
      } catch (error) {
        const lastMessage = runningProjectMessages[runningProjectMessages.length - 1]

        if (typeof lastMessage === 'string') {
          setCurrentMessage(lastMessage)
        }
      }
    }
  }, [runningProjectMessages])

  return (
    <>
      <EpisodeWrapper>
        <Flex direction="column">
          <Flex direction="row">
            <IconWrapper>
              <AiSummaryIcon />
            </IconWrapper>

            <Title>{currentTitle}</Title>
          </Flex>
          <LogMessage>{currentMessage}</LogMessage>
          <SkeletonWrapper grow={1} shrink={1}>
            <StyledSkeleton height={height} variant="rectangular" width={fullWidth} />

            <StyledSkeleton height={height} variant="rectangular" width={fullWidth} />

            <StyledSkeleton height={height} variant="rectangular" width={fullWidth} />

            <StyledSkeleton height={height} variant="rectangular" width={fullWidth} />

            <StyledSkeleton height={height} variant="rectangular" width={180} />
          </SkeletonWrapper>
        </Flex>
      </EpisodeWrapper>
    </>
  )
}
