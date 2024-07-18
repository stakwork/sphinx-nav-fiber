import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { FlexboxProps } from '~/components/common/Flex/flexbox'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'

type EpisodeWrapperProps = FlexboxProps & {
  isSelected?: boolean
}

type Props = {
  count?: number
}

const EpisodeWrapper = styled(Flex).attrs({
  direction: 'column',
})<EpisodeWrapperProps>`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${colors.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }

  .title {
    margin: 20px 0 8px;
  }
`

const StyledSkeleton = styled(Skeleton)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`

export const EpisodeSkeleton = ({ count = 7 }: Props) => (
  <>
    {Array(count)
      .fill(null)
      .map((val, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <EpisodeWrapper key={index}>
          <Flex direction="row">
            <Flex align="center" pr={16}>
              <StyledSkeleton animation="wave" height={64} variant="rectangular" width={64} />
            </Flex>

            <Flex grow={1} shrink={1}>
              <StyledSkeleton height={10} variant="rectangular" width={56} />

              <StyledSkeleton className="title" height={10} variant="rectangular" width={262} />
              <StyledSkeleton height={10} variant="rectangular" width={149} />
            </Flex>
          </Flex>
        </EpisodeWrapper>
      ))}
  </>
)

export const Description = styled(Flex)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${colors.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`

export const Date = styled(Text)`
  overflow: hidden;
  color: ${colors.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`

export const Title = styled(Date)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    margin-right: 8px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${colors.GRAY6};
  }
`
