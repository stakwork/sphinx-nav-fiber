import React, {useRef,useEffect} from 'react';
import { ForceGraph3D } from 'react-force-graph';
import * as three from 'three'
import SpriteText from 'three-spritetext'

function UniverseBrowser(props: any) {
    const mapRef: any = useRef(null)

     // update dataset
    useEffect(() => {
        setTimeout(() => {
            // add topic planet
            // const sprite = new SpriteText('test');
            // sprite.color = 'red';
            // sprite.textHeight = 100

            // console.log('mapRef?.current.scene',mapRef?.current.scene)
            // mapRef?.current.scene.add( sprite );
            
            // zoom out
            mapRef?.current?.zoomToFit(800,50)
        },500)
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
          
        const map = loader.load(img);
        const material = new three.SpriteMaterial({
            map: map,
        });
        const sprite = new three.Sprite(material);
    
        sprite.scale.set(20, 20, 1);
    
        return sprite
    }
      
    const linkObject = () => {
        const material = new three.LineBasicMaterial({
            opacity: 0.6,
            transparent:true,
            color: '#000000'
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
        nodeVisibility={() => {
            // hide nodes if not hovered
            return true
        }}
        linkVisibility={() => {
            // hide links if not hovered
            return true
        }}
        rendererConfig={{
            stencil: false,
            powerPreference: 'high-performance',
            precision: 'lowp',
        }}
        nodeLabel={() => ''}
        // warmupTicks={20}
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
        
        {!props.graphData?.nodes?.length && <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
        }}>
            <div>No results</div>
        </div>
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

export default React.memo(UniverseBrowser,areEqual);