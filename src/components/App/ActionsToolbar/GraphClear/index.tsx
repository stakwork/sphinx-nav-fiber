import { Button } from '@mui/material'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import { useDataStore } from '~/stores/useDataStore'

export const GraphClear = () => {
  const { resetData } = useDataStore((s) => s)

  return <CameraCenterButton href="" onClick={() => resetData()} size="medium" startIcon={<ClearIcon />} />
}

const CameraCenterButton = styled(Button)`
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
