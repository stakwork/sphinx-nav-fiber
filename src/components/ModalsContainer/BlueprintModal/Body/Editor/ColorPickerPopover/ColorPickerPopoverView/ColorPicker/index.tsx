/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { HuePicker } from 'react-color'
import { colors } from '~/utils/colors'
import { useState } from 'react'
import SaturationPicker from './SaturationPicker'
import { hslToHex, hexToHsl } from './ColorUtils'
import { useAppStore } from '~/stores/useAppStore'
import { circleColors } from '../../Constants'

export const ColorPicker = () => {
  const { selectedColor, setSelectedColor } = useAppStore((s) => s)
  const [hexValue, setHexValue] = useState(selectedColor)
  const [hueValue, setHueValue] = useState(315)
  const [saturation, setSaturation] = useState(74)
  const [brightness, setBrightness] = useState(59)

  const handleColorChange = (hexColor: string) => {
    setSelectedColor(hexColor)
    setHexValue(hexColor)

    const { h, s, l } = hexToHsl(hexColor)

    setHueValue(h)
    setSaturation(s)
    setBrightness(l)
  }

  const handleHueChange = (color: { hsl: { h: number }; hex: string }) => {
    setHueValue(color.hsl.h)

    const newHex = hslToHex(color.hsl.h, saturation, brightness)

    handleColorChange(newHex)
  }

  const handleSaturationChange = (hexColor: string) => {
    setSelectedColor(hexColor)
    setHexValue(hexColor)

    const { h, s, l } = hexToHsl(hexColor)

    setHueValue(h)
    setSaturation(s)
    setBrightness(l)
  }

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = e.target.value

    setHexValue(newHex)

    const { h, s, l } = hexToHsl(newHex)

    setHueValue(h)
    setSaturation(s)
    setBrightness(l)
    setSelectedColor(newHex)
  }

  return (
    <Wrapper direction="column" justify="flex-end">
      <TableWrapper align="center">
        <PickerContainer>
          <ColorPaletteWrapper>
            <ColorPalette>
              {circleColors.map((circleColor) => (
                <ColorCircle key={circleColor} color={circleColor} onClick={() => handleColorChange(circleColor)} />
              ))}
            </ColorPalette>
          </ColorPaletteWrapper>

          <SaturationPickerWrapper>
            <SaturationPicker hue={hueValue} onChange={handleSaturationChange} />
          </SaturationPickerWrapper>

          <HuePickerWrapper>
            <HuePicker color={selectedColor} onChange={handleHueChange} />
          </HuePickerWrapper>

          <HexaInputWrapper>
            <LabelText>HEX</LabelText>

            <StyledInput onChange={handleHexInputChange} type="text" value={hexValue} />
          </HexaInputWrapper>
        </PickerContainer>
      </TableWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${colors.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${colors.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }

  .load-more {
    margin: 8px auto;
    align-self: center;
  }
`

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`

const PickerContainer = styled.div`
  padding: 0 20px;
  width: 315px;
`

const ColorPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 16px;
`

const ColorPaletteWrapper = styled.div`
  margin-left: 10px;
  margin-bottom: 6px;
`

const ColorCircle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 7px ${(props) => props.color};
  }
`

const SaturationPickerWrapper = styled.div`
  margin-bottom: 8px;
  margin-left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HuePickerWrapper = styled.div`
  margin-bottom: 15px;
  width: 224px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  font-family: 'Barlow';
  padding: 2px 5px 2px 10px;
  font-size: 13px;
  background-color: ${colors.black};
  color: ${colors.primaryText1};
  border-radius: 6px;
  width: 84px;
  height: 28px;
  border: none;

  &:focus {
    outline: none;
  }
`

const LabelText = styled.p`
  font-family: 'Barlow';
  font-size: 13px;
  font-weight: 400;
  color: ${colors.primaryText1};
  letter-spacing: 1px;
  margin: 0 10px;
`

const HexaInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
