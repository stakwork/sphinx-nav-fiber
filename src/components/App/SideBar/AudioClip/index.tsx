import { Divider } from '@mui/material'
import { memo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Booster } from '~/components/Booster'
import { Flex } from '~/components/common/Flex'
import { useSelectedNode } from '~/stores/useDataStore'
import { formatDescription } from '~/utils/formatDescription'
import { BoostAmt } from '../../Helper/BoostAmt'
import { Description } from '../Description'
import { Episode } from '../Relevance/Episode'
import { Transcript } from '../Transcript'

const Wrapper = styled(Flex)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`

const StyledDivider = styled(Divider)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`

const StyledEpisode = styled(Episode)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`

// eslint-disable-next-line no-underscore-dangle
const _AudioClip = () => {
  const selectedNode = useSelectedNode()
  const scrollTargetRef = useRef<HTMLDivElement | null>(null)

  const {
    image_url: imageUrl,
    show_title: showTitle,
    date,
    boost,
    type,
    id,
    ref_id: refId,
    episode_title: episodeTitle,
  } = selectedNode || {}

  const [boostAmount, setBoostAmount] = useState<number>(boost || 0)

  return (
    <Wrapper>
      <StyledEpisode
        boostCount={boost || 0}
        date={date || 0}
        episodeTitle={formatDescription(episodeTitle)}
        id={id}
        imageUrl={imageUrl || 'audio_default.svg'}
        isSelectedView
        onClick={() => null}
        showTitle={formatDescription(showTitle)}
        type={type}
      />
      <StyledDivider />
      <div ref={scrollTargetRef} style={{ overflow: 'auto', flex: 1, width: '100%' }}>
        <BoostWrapper>
          <BoostAmt amt={boostAmount} />
          <Booster content={selectedNode} count={boostAmount} refId={refId} updateCount={setBoostAmount} />
        </BoostWrapper>
        <StyledDivider />
        <TextWrapper>
          <Description node={selectedNode} stateless />
        </TextWrapper>
        <StyledDivider />
        <TextWrapper>
          <Transcript key={id} node={selectedNode} stateless />
        </TextWrapper>
      </div>
    </Wrapper>
  )
}

export const AudioClip = memo(_AudioClip)

const BoostWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`

const TextWrapper = styled(Flex)`
  padding: 18px 18px 18px;
`
