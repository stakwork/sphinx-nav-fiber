import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import DeleteNodeIcon from '~/components/Icons/DeleteNodeIcon'
import { colors } from '~/utils/colors'

interface TitleEditorProps {
  nodeName: string
}

export const TitleEditor = ({ nodeName }: TitleEditorProps) => (
  <Flex>
    <Flex align="center" direction="column" justify="space-between">
      <IconWrapper>
        <DeleteNodeIcon />
      </IconWrapper>
      <Title>Are you sure you want to delete {nodeName || `this item`}?</Title>
    </Flex>
  </Flex>
)

const Title = styled(Flex)`
  color: ${colors.white};
  font-family: 'Barlow';
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  word-wrap: break-word;
`

const IconWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`
