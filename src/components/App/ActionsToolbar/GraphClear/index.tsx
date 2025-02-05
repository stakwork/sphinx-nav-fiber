import { Button } from '@mui/material'
import styled from 'styled-components'
import { Tooltip } from '~/components/common/ToolTip'
import ClearIcon from '~/components/Icons/ClearIcon'
import { useDataStore } from '~/stores/useDataStore'

export const GraphClear = () => {
  const { resetGraph } = useDataStore((s) => s)

  return (
    <Tooltip content="Clear Graph" fontSize="13px" position="left">
      <ClearButton href="" onClick={() => resetGraph()} size="medium" startIcon={<ClearIcon />} />
    </Tooltip>
  )
}

const ClearButton = styled(Button)`
  && {
    padding: 0;
    width: 32px;
    min-width: auto;
    justify-content: center;
    align-items: center;
    pointer-events: all;

    .MuiButton-startIcon {
      margin-left: 0;
      color: #fff;
      filter: brightness(0.65);
    }
  }
`
