import styled from 'styled-components'
import { Button } from '~/components/Button'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'

export const Overlay = () => {

    const [ cameraFocusTrigger, setCameraFocusTrigger] = useDataStore(s=>[s.cameraFocusTrigger, s.setCameraFocusTrigger])
    const selectedNode = useSelectedNode()
    const userMovedCamera = useControlStore(s => s.userMovedCamera)
    
    return (
        <OverlayWrap>
        
            <div id="tooltip-portal" />

            {!!selectedNode && userMovedCamera &&
                <Button
                    background="bluePressState"
                    kind='small'
                    onClick={() => setCameraFocusTrigger(!cameraFocusTrigger)}>
                    Re-center map
                </Button>
            }
        
    </OverlayWrap>
    )
}
    

  
const OverlayWrap = styled.div`
position:absolute;
z-index:1;
top:0px;
left:0px;
user-select:none;
pointer-events:none;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
height:100%;
width:100%;
padding:16px;
`

const BottomRow = styled.div`

display:flex;
`