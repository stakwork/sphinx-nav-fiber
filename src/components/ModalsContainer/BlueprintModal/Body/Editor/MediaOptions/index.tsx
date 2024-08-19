import { FormControlLabel, Switch, SwitchProps } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

type MediaOptionKey = 'videoAudio' | 'image' | 'sourceLink'

type MediaOptionsProps = {
  setMediaOptions: (options: { videoAudio: boolean; image: boolean; sourceLink: boolean }) => void
}

const MediaOptions = ({ setMediaOptions }: MediaOptionsProps) => {
  const [mediaOptions, setLocalMediaOptions] = useState({
    videoAudio: false,
    image: false,
    sourceLink: false,
  })

  const handleToggle = (option: MediaOptionKey) => {
    setLocalMediaOptions((prevOptions) => {
      const newOptions = {
        ...prevOptions,
        [option]: !prevOptions[option],
      }

      setMediaOptions(newOptions)

      return newOptions
    })
  }

  return (
    <StyledFlex direction="column">
      <LineBar />

      <StyledFormControlLabel
        control={<CustomSwitch checked={mediaOptions.videoAudio} onChange={() => handleToggle('videoAudio')} />}
        label={<StyledLabel active={mediaOptions.videoAudio}>Video / Audio</StyledLabel>}
        labelPlacement="start"
      />

      <LineBar />

      <StyledFormControlLabel
        control={<CustomSwitch checked={mediaOptions.image} onChange={() => handleToggle('image')} />}
        label={<StyledLabel active={mediaOptions.image}>Image</StyledLabel>}
        labelPlacement="start"
      />

      <LineBar />

      <StyledFormControlLabel
        control={<CustomSwitch checked={mediaOptions.sourceLink} onChange={() => handleToggle('sourceLink')} />}
        label={<StyledLabel active={mediaOptions.sourceLink}>Source Link</StyledLabel>}
        labelPlacement="start"
      />
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  direction: column;
`

const StyledFormControlLabel = styled(FormControlLabel)`
  justify-content: space-between;
  margin: 8px 0;
`

const StyledLabel = styled.span<{ active: boolean }>`
  color: ${({ active }) => (active ? colors.white : colors.GRAY7)};
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
`

const CustomSwitch = styled((props: SwitchProps) => <Switch {...props} />)`
  &.MuiSwitch-root {
    width: 53px;
    height: 38px;
  }
  & .MuiSwitch-switchBase {
    margin-top: 3px;
    &.Mui-checked {
      color: ${colors.white};
      & + .MuiSwitch-track {
        background-color: ${colors.primaryBlueBorder};
        opacity: 1;
      }
    }
  }
  & .MuiSwitch-thumb {
    width: 13px;
    height: 13px;
  }
  & .MuiSwitch-track {
    border-radius: 10px;
    background-color: ${colors.BG2};
    opacity: 1;
  }
`

const LineBar = styled.div`
  border: 1px solid ${colors.BG2};
  width: 100%;
  opacity: 0.5;
`

export default MediaOptions
