import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import PlusIcon from '~/components/Icons/PlusIcon'
import { colors } from '~/utils'

type Props = {
  name: string
  url?: string
}

export const Content = ({ name, url }: Props) => (
  <Wrapper>
    {url && <img alt="" className="image" src={url} />}
    <div className="title">{name}</div>
    <div className="action-btn">
      <PlusIcon />
    </div>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  position: relative;
  padding: 14px;
  padding-right: 28px;
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  .title {
    margin-top: 8px;
  }

  .image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-bottom: 8px;
    object-fit: cover;
  }

  .action-btn {
    top: 14px;
    right: 14px;
    color: ${colors.GRAY6};
    position: absolute;
  }
`
