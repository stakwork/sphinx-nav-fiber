import { Button } from '@mui/material'
import styled from 'styled-components'
import CameraCenterIcon from '~/components/Icons/CameraCenterIcon'
import { useGraphStore } from '~/stores/useGraphStore'

export const CameraRecenterControl = () => {
  const [cameraFocusTrigger, setCameraFocusTrigger] = useGraphStore((s) => [
    s.cameraFocusTrigger,
    s.setCameraFocusTrigger,
  ])

  return (
    <CameraCenterButton
      href=""
      onClick={() => setCameraFocusTrigger(!cameraFocusTrigger)}
      size="medium"
      startIcon={<CameraCenterIcon />}
    />
  )
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
      filter: brightness(0.65);
    }
  }
`
