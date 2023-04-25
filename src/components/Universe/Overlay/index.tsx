import styled from 'styled-components'
import { Button } from '~/components/Button'
import { useSelectedNode } from '~/stores/useDataStore'

export const Overlay = () => {

    const selectedNode = useSelectedNode()

    console.log('selectedNode',selectedNode)

    return (
        <OverlayWrap>
        
        <div id="tooltip-portal" />

        <Button kind="small" >
            Re-center map
        </Button>
        
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
justify-content:flex-end;
height:100%;
width:100%;
padding:16px;
`