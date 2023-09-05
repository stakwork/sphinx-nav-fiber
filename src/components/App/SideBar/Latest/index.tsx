import { memo } from 'react'
import styled from 'styled-components'
import BrowseGalleryIcon from '~/components/Icons/BrowseGalleryIcon'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'
import { Relevance } from '../Relevance'

type Props = {
  isSearchResult: boolean
}

// eslint-disable-next-line no-underscore-dangle
const _View = ({ isSearchResult }: Props) => (
  <Wrapper>
    {!isSearchResult && (
      <div className="heading">
        <span className="heading__title">Latest</span>
        <span className="heading__icon">
          <BrowseGalleryIcon />
        </span>
      </div>
    )}
    <Relevance />
  </Wrapper>
)

export const LatestView = memo(_View)

const Wrapper = styled(Flex)`
  .heading {
    color: ${colors.GRAY6};
    padding: 0 24px 16px 24px;
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
