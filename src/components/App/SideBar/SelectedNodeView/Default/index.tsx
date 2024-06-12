import clsx from 'clsx'
import styled from 'styled-components'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useSelectedNode } from '~/stores/useDataStore'
import { MediaPlayer } from '~/components/App/SideBar/SidebarSubView/MediaPlayer'

export const Default = () => {
  const selectedNode = useSelectedNode()

  if (!selectedNode) {
    return null
  }

  const hasImage = !!selectedNode.image_url
  const hasMedia = !!selectedNode.media_url

  const customKeys = selectedNode.properties || {}

  return (
    <StyledContainer>
      {hasImage ? (
        <StyledImageWrapper>
          <img
            alt="img_a11y"
            onError={(e) => {
              e.currentTarget.src = 'generic_placeholder_img.png'
              e.currentTarget.className = 'default-img'
            }}
            src={selectedNode.image_url}
          />
        </StyledImageWrapper>
      ) : null}

      {hasMedia ? <MediaPlayer hidden={false} /> : null}

      <StyledContent grow={1} justify="flex-start" pt={hasImage ? 0 : 8} shrink={1}>
        <Flex ml={24} mt={20} style={{ width: 'fit-content' }}>
          <TypeBadge type={selectedNode.type || ''} />
        </Flex>

        <StyledWrapper>
          {Object.entries(customKeys)
            .filter(([key]) => key !== 'media_url')
            .map(([key, value]) => (
              <NodeDetail key={key} label={key} value={value} />
            ))}
        </StyledWrapper>
      </StyledContent>
    </StyledContainer>
  )
}

type Props = { label: string; value: unknown }

const NodeDetail = ({ label, value }: Props) => {
  const isLong = (value as string).length > 140

  return (
    <>
      <StyledDetail className={clsx('node-detail', { 'node-detail__long': isLong })}>
        <Text className="node-detail__label">{label}</Text>
        <Text className="node-detail__value">{value as string}</Text>
      </StyledDetail>
      <StyledDivider />
    </>
  )
}

const StyledContent = styled(Flex)`
  overflow: auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
`

const StyledWrapper = styled(Flex)`
  padding: 4px 24px;
`

const StyledImageWrapper = styled(Flex)`
  width: 100%;
  height: 240px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .default-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    border-radius: 2px;
  }
`

const StyledDetail = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: Barlow;
  padding: 12px 0;
  font-size: 14px;
  line-height: 22px;

  &.node-detail {
    .node-detail__label {
      min-width: 116px;
      font-weight: 600;
    }

    .node-detail__value {
      font-weight: 400;
      word-wrap: normal;
      word-break: break-word;
    }

    &__long {
      flex-direction: column;
    }
  }
`

const StyledDivider = styled(Divider)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`

const StyledContainer = styled(Flex)`
  flex-direction: column;
  height: 100%;
`
