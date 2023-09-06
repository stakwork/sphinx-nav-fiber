import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import SentimentDataIcon from '~/components/Icons/SentimentDataIcon'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

const TRENDING_TOPICS = ['Drivechain', 'Ordinals', 'L402', 'Nostr', 'AI']

type Props = {
  onSubmit?: () => void
}

export const Trending = ({ onSubmit }: Props) => {
  const { setValue } = useFormContext()

  const selectTrending = (val: string) => {
    setValue('search', val)
    onSubmit?.()
  }

  return (
    <Wrapper>
      <div className="heading">
        <span className="heading__title">Trending Topics</span>
        <span className="heading__icon">
          <SentimentDataIcon />
        </span>
      </div>
      <ul className="list">
        {TRENDING_TOPICS.map((i) => (
          <Flex key={i} className="list-item" onClick={() => selectTrending(i)}>
            #{i}
          </Flex>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  .heading {
    color: ${colors.GRAY6};
    padding: 0 24px 9px 24px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;

    &__icon {
      margin-left: 16px;
      font-size: 24px;
    }
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${colors.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${colors.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${colors.PRIMARY_BLUE};
      }
    }
  }
`
