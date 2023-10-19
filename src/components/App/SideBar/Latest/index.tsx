import { memo } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import BrowseGalleryIcon from '~/components/Icons/BrowseGalleryIcon'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { Relevance } from '../Relevance'

type Props = {
  isSearchResult: boolean
}

// eslint-disable-next-line no-underscore-dangle
const _View = ({ isSearchResult }: Props) => {
  const [nodeCount, setNodeCount] = useUserStore((s) => [s.nodeCount, s.setNodeCount])
  const [fetchData] = [useDataStore((s) => s.fetchData)]

  const getLatest = async () => {
    if (nodeCount < 1) {
      return
    }

    await fetchData()
    setNodeCount('CLEAR')
  }

  return (
    <Wrapper>
      {!isSearchResult && (
        <div className="heading_container">
          <div className="heading">
            <span className="heading__title">Latest</span>
            <span className="heading__icon">
              <BrowseGalleryIcon />
            </span>
          </div>
          <div className="button_container">
            {nodeCount ? <button onClick={getLatest} type="button">{`See latest (${nodeCount})`}</button> : ''}
          </div>
        </div>
      )}
      <Relevance isSearchResult={isSearchResult} />
    </Wrapper>
  )
}

export const LatestView = memo(_View)

const Wrapper = styled(Flex)`
  .heading_container {
    display: flex;
    align-items center;
    justify-content: space-between;
    padding: 16px 24px 16px 24px;
  }

  .button_container{
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background-color: transparent;
      outline: none;
      border: none;
      font-family: Barlow;
      font-size: 1.1rem;
      color: ${colors.GRAY6};
      cursor: pointer;
      font-weight: 500;
    }
  }

  .heading {
    color: ${colors.GRAY6};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
      margin-left: 14px;
      margin-bottom: -2px;
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
