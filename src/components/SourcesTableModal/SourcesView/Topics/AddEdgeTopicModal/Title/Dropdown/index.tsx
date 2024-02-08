import FormControl from '@mui/material/FormControl'
import Popover from '@mui/material/Popover'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import CheckIcon from '~/components/Icons/CheckIcon'
import ChevronDownIcon from '~/components/Icons/ChevronDownIcon'
import ChevronUpIcon from '~/components/Icons/ChevronUpIcon'
import { Flex } from '~/components/common/Flex'
import { getEdgeTypes } from '~/network/fetchSourcesData'
import { colors } from '~/utils/colors'

type Props = {
  selectedType: string
  setSelectedType: (option: string) => void
}

export const Dropdown: FC<Props> = ({ selectedType, setSelectedType }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getEdgeTypes()

        setOptions(data.edge_types)
      } catch (error) {
        console.warn(error)
      }
    }

    init()
  }, [setOptions])

  const handleOpenPopover = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement)
  }

  const handleClosePopover = () => {
    setAnchorEl(null)
  }

  const handleSelectChange = (option: string) => {
    setSelectedType(option)
    handleClosePopover()
  }

  return (
    <div>
      <Action onClick={handleOpenPopover}>
        <div className="text">Type</div>
        <div className="value">{selectedType}</div>
        <div className="icon">{!anchorEl ? <ChevronDownIcon /> : <ChevronUpIcon />}</div>
      </Action>
      <StyledPopover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        anchorPosition={{
          top: 62,
          left: 0,
        }}
        onClose={handleClosePopover}
        open={Boolean(anchorEl)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <FormControl>
          {options.map((option) => (
            <MenuItem
              key={option}
              className={clsx({ active: option === selectedType })}
              onClick={() => handleSelectChange(option)}
            >
              <span className="icon">{option === selectedType ? <CheckIcon /> : null}</span>
              <span>{option}</span>
            </MenuItem>
          ))}
        </FormControl>
      </StyledPopover>
    </div>
  )
}

const Action = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
})`
  cursor: pointer;
  flex-grow: 1;
  color: ${colors.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${colors.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`

const MenuItem = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${colors.white};
  }
  &:hover {
    color: ${colors.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`

const StyledPopover = styled(Popover)`
  .MuiPaper-root {
    background: ${colors.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${colors.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`
