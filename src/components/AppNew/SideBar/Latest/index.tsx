import { Button } from '@mui/material'
import { memo } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import BrowseGalleryIcon from '~/components/Icons/BrowseGalleryIcon'
import DownloadIcon from '~/components/Icons/DownloadIcon'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { Relevance } from '../Relevance'

type Props = {
  isSearchResult: boolean
}

// eslint-disable-next-line no-underscore-dangle
const _View = ({ isSearchResult }: Props) => {
  const [nodeCount, setNodeCount, setBudget] = useUserStore((s) => [s.nodeCount, s.setNodeCount, s.setBudget])
  const [fetchData, setAbortRequests] = useDataStore((s) => [s.fetchData, s.setAbortRequests])

  const getLatest = async () => {
    if (nodeCount < 1) {
      return
    }

    await fetchData(setBudget, setAbortRequests, { skip_cache: 'true' })
    setNodeCount('CLEAR')
  }

  return (
    <Wrapper>
      {!isSearchResult && (
        <div className="heading-container">
          <div className="heading">
            <span className="heading__title">Latest</span>
            <span className="heading__icon">
              <BrowseGalleryIcon />
            </span>
          </div>
          {nodeCount ? (
            <div className="button_container">
              <ButtonStyled
                className="button"
                data-testid="see_latest_button"
                onClick={getLatest}
                startIcon={<DownloadIcon />}
              >
                {`See Latest (${nodeCount})`}
              </ButtonStyled>
            </div>
          ) : null}
        </div>
      )}
      <Relevance isSearchResult={isSearchResult} />
    </Wrapper>
  )
}

const ButtonStyled = styled(Button)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${colors.GRAY6};
    }
  }
`

export const LatestView = memo(_View)

const Wrapper = styled(Flex)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
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
