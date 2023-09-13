import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { convertToChatMessage } from '~/utils/stringToChatMessage'

export const Messages = () => {
  const {
    sender_pic: senderPic,
    sender_alias: senderAlias,
    date,
    message_content: messageContent,
  } = useSelectedNode() || {}

  return (
    <Flex direction="row">
      <Avatar src={senderPic} type="message" />
      <MessageWrapper>
        <Flex align="flex-end" className="info" direction="row">
          {senderAlias && <span className="info__name">{senderAlias}</span>}
          {date && <span className="info__date">{date}</span>}
        </Flex>
        {messageContent && <Message dangerouslySetInnerHTML={{ __html: convertToChatMessage(messageContent) }} />}
      </MessageWrapper>
    </Flex>
  )
}

const MessageWrapper = styled(Flex)`
  color: ${colors.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${colors.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${colors.green400};
    font-size: 16px;
  }
`

const Message = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${colors.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${colors.blueTextAccent};
  }

  a {
    color: ${colors.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${colors.blueTextAccent};
    text-decoration: none;
  }
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`
