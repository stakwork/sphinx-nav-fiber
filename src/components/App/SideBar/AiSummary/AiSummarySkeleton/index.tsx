import { forwardRef } from 'react'
import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { FlexboxProps } from '~/components/common/Flex/flexbox'
import { Text } from '~/components/common/Text'
import AiSummaryIcon from '~/components/Icons/AiSummaryIcon'
import { colors } from '~/utils/colors'

type EpisodeWrapperProps = FlexboxProps & {
  isSelected?: boolean
}

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'column',
})<EpisodeWrapperProps>`
  padding: 24px;
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

const height = 8

const fullWidth = 332

const AiSummarySkeleton = forwardRef<HTMLDivElement>((props, ref) => (
  <>
    <EpisodeWrapper>
      <Flex direction="column">
        <Flex direction="row">
          <IconWrapper>
            <AiSummaryIcon />
          </IconWrapper>

          <Title ref={ref}>Answer</Title>
        </Flex>
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
))

AiSummarySkeleton.displayName = 'AiSummarySkeleton'

export { AiSummarySkeleton }
