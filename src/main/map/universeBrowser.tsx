
import { ForceGraph3D } from 'react-force-graph';
import * as three from 'three'
import SpriteText from 'three-spritetext'

export default function UniverseBrowser(props: any) {
    
    const nodeObject = (node: any) => {

        let color = (node.colors && node.colors[0]) ? node.colors[0] : 'tomato'
        
        if (node.type === 'topic') {
            const sprite = new SpriteText(node.name);
            sprite.color = color;
            
            sprite.textHeight = 10 + node.scale;
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
            'Access-Control-Allow-Origin': '*',    
        } 
          

        const map = loader.load(img);
        const material = new three.SpriteMaterial({
            map: map,
        });
        const sprite = new three.Sprite(material);
    
        // const sprite = new three.Sprite(new three.SpriteMaterial({
        //   color: color,
        //   transparent: true,
        //   fog: false
        // }));
        
        sprite.scale.set(20, 20, 1);
    
        return sprite
    }
      
    const linkObject = () => {
        const material = new three.LineBasicMaterial({
            opacity: 0.3,
            transparent:true,
            color: '#000000'
        });
        const geometry = new three.BufferGeometry();
        const line = new three.Line(geometry, material);
    
        return line
    }

    return <div style={{height:'100%',width:'100%',position:'relative'}}>
        <ForceGraph3D
        ref={props.mapRef}
        graphData={props.graphData}
        width={props.width}
        height={props.height}
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
            precision: 'highp',
        }}
        warmupTicks={0}
        nodeLabel={'label'}
        enableNodeDrag={false}
        onNodeClick={(node: any) => props.clickNode(node)}
        backgroundColor={'#f1f1f1'}
        nodeAutoColorBy="type"
        linkThreeObject={linkObject}
        nodeThreeObject={(node: any) => {
            return nodeObject(node)
        }}
        />

        {props.renderTooltip && props.renderTooltip}
        
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