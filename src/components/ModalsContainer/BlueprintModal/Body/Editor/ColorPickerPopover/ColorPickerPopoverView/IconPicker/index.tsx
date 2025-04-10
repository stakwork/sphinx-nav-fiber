import React from 'react'
import styled, { css } from 'styled-components'
import { Icons } from '~/components/Icons'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils'

export const IconPicker: React.FC = () => {
  const { selectedIcon, setSelectedIcon } = useAppStore((s) => s)

  const handleIconChange = (icon: string) => {
    setSelectedIcon(icon)
  }

  return (
    <Wrapper direction="column" justify="flex-end">
      <TableWrapper align="center">
        <PickerContainer>
          <IconPaletteWrapper>
            <IconGrid>
              {Object.keys(Icons).map((iconKey) => {
                const IconComponent = Icons[iconKey as keyof typeof Icons]

                return (
                  <IconBox
                    key={iconKey}
                    isSelected={selectedIcon === iconKey}
                    onClick={() => handleIconChange(iconKey)}
                  >
                    {IconComponent && <IconComponent />}
                  </IconBox>
                )
              })}
            </IconGrid>
          </IconPaletteWrapper>
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
  width: 300px;
  height: 350px;
  overflow: auto;
`

const IconPaletteWrapper = styled.div`
  margin-left: 18px;
  margin-bottom: 6px;
`

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 16px;
`

const IconBox = styled.div<{ isSelected: boolean }>`
  width: 50px;
  height: 50px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 8px;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background: ${colors.black};
          border: 1px solid ${colors.primaryBlue};
        `
      : css`
          &:hover {
            background: ${colors.black};
            border: 1px solid ${colors.primaryBlue};
          }
        `}

  svg {
    width: 30px;
    height: 30px;
    object-fit: contain;
    color: white;

    rect {
      width: 1.5em;
      height: 1.5em;
    }
  }
`
