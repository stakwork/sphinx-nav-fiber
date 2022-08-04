import React, {useRef,useEffect,useLayoutEffect,useState} from 'react';
import { ForceGraph3D } from 'react-force-graph';
import * as three from 'three'
import SpriteText from 'three-spritetext'
import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";

let simCallback: any = null
let nodeMaterials:any = {}

function UniverseBrowser(props: any) {
    const mapRef: any = useRef(null)
    const [loading, setLoading]: any = useState(false)

    function zoomIt() {
        setTimeout(() => {
            mapRef?.current?.zoomToFit(800, 10)  
        },800)
    }

    useLayoutEffect(() => {
        if (props.openingAnimation) {
            zoomIt()
        } else {
                simCallback = mapRef?.current?.d3Force('tick', (e: any, b: any) => {
                    if (loading && e < 0.5) {
                        setLoading(false)
                    }
                })
            
                if (!loading) {
                    zoomIt()
                }
        }
    },[props.openingAnimation,loading])

     // update dataset
    useEffect(() => {
        if (!props.openingAnimation) setLoading(true)
        nodeMaterials = {}
    }, [props.graphData])

    
    const nodeObject = (node: any) => {

        // this is used for startup animation
        if (node.fakeData) {
            const sprite = new SpriteText(node.label);
            sprite.color = '#000000';
            sprite.textHeight = 10 + node.scale;

            return sprite;
        }

        let color = (node.colors && node.colors[0]) ? node.colors[0] : 'tomato'

        if (node.type === 'sun') {
            const sprite = new SpriteText(node.name);
            sprite.color = color;
            sprite.textHeight = 10 + node.scale;

            return sprite;
        }
        
        if (node.type === 'topic') {
            const sprite = new SpriteText(node.name);
            sprite.color = color;
            let textSize = 15 + node.scale;
            if (textSize > 100) textSize = 100
            
            sprite.textHeight = textSize
            return sprite;
        }

        let img = node.image_url

        if (!img) {
            switch (node.type) {
                case 'youtube':
                    img = 'youtube_default.jpeg'
                    break;
                case 'twitter':
                    img = 'twitter_logo.svg'
                    break;
                case 'podcast':
                    img = 'audio_default.svg'
                    break;
                default:
                    img = 'audio_default.svg'
                }    
        } 


        const loader = new three.TextureLoader()

        loader.requestHeader = {
            'Access-Control-Allow-Origin': window.location.origin,    
        } 

        let material: any = null

        if (nodeMaterials[img]) {
            material = nodeMaterials[img]
        } else {
            const map = loader.load(img);
            material = new three.SpriteMaterial({
                map: map,
            });
            nodeMaterials[img] = material
        }
          
        const sprite = new three.Sprite(material);
    
        sprite.scale.set(30, 30, 1);
    
        return sprite
    }
      
    const linkObject = () => {
        const material = new three.LineBasicMaterial({
            opacity: 0.6,
            transparent:true,
            color: '#000000',
        });
        const geometry = new three.BufferGeometry();
        const line = new three.Line(geometry, material);
    
        return line
    }

    // console.log(mapRef?.current)

    return <div style={{height:'100%',width:'100%',position:'relative'}}>
        <ForceGraph3D
        ref={mapRef}
        graphData={props.graphData}
        width={props.width}
        height={props.height}
        onNodeHover={props.onNodeHovered}
        d3VelocityDecay={0.1}
        nodeVisibility={() => {
            return !loading
        }}
        linkVisibility={() => {
            return !loading
        }}
        // dagMode={'rl'}
        // dagLevelDistance={500}
        rendererConfig={{
            stencil: false,
            powerPreference: 'high-performance',
            precision: 'lowp',
        }}
        nodeLabel={() => ''}
        // skips animation
        // warmupTicks={engineWarmupTicks}
        // onEngineTick={() => {
        //     console.log('tick')  
        //     if (engineTicks > -1 && engineTicks < callbackTickCount) {
        //         engineTicks++ 
        //     } else if (loading) {
        //         engineTicks = -1
        //         setLoading(false)
        //         setTimeout(() => {
        //             mapRef?.current?.zoomToFit(800, 50)    
        //         },300)
        //     }            
        // }}
        enableNodeDrag={false}
        onNodeClick={(node: any) => {
            if (node.type === 'sun') {
                mapRef?.current?.zoomToFit(600,100)
                }
            props.onNodeClicked(node)
        }}
        backgroundColor={'#f1f1f1'}
        nodeAutoColorBy="type"
        linkThreeObject={linkObject}
        nodeThreeObject={(node: any) => {
            return nodeObject(node)
        }}
        />
        
        <Shield style={{ opacity: loading ? 1 : 0 }}>
            <ClipLoader color={'#000'} loading={true} size={14} />
            <div style={{marginLeft:10}}>Loading {props.graphData?.nodes?.length} results...</div>
        </Shield>
        
        {!props.graphData?.nodes?.length && <Shield>
            <div>No results</div>
        </Shield>
        }

        </div>
}

function areEqual(prevProps:any, nextProps:any) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    
    const {width, height, graphData} = prevProps

    if (width !== nextProps.width
        || height !== nextProps.height
        || graphData !== nextProps.graphData) {
        return false
    }
    
    return true
  }

export default React.memo(UniverseBrowser, areEqual);

const Shield = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
pointer-events:none;
top: 0px;
left: 0px;
height: 100%;
width: 100%;
background:#f1f1f1;
transition: opacity 0.5s;
`