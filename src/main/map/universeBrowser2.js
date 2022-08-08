import React, {useRef,useEffect,useLayoutEffect,useState} from 'react';
import SpriteText from 'three-spritetext'
import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";
import ThreeForceGraph from 'three-forcegraph';
// import TrackballControls from 'three-trackballcontrols';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import * as THREE from 'three'

//constructor
let Graph, scene, renderer, camera, controls, light, raycaster, pointer, selectedObject

let nodeMaterials = {}
let rendererStarted = false
const warmupTicks = 20

function UniverseBrowser(props) {
    const [loading, setLoading] = useState(false)
    const [loadingTicks, setLoadingTicks] = useState(0)

    // initialize graph with config
    useLayoutEffect(() => {

        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2();

        Graph = new ThreeForceGraph()
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xf1f1f1 );
        scene.add(Graph);
        renderer = new THREE.WebGLRenderer();
        camera = new THREE.PerspectiveCamera();
        camera.far = 10000;
        
        controls = new TrackballControls(camera, renderer.domElement);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        
        controls.keys = ['KeyA', 'KeyS', 'KeyD'];

        
        
        light = new THREE.AmbientLight(0xbbbbbb)
        scene.add(light);
        
        Graph.nodeThreeObject(nodeObject)
        Graph.linkThreeObject(linkObject)
        Graph.d3VelocityDecay(0.05)
     
        Graph.onFinishUpdate((e) => {
            console.log('finish update', e)
            for (let i = 0; i < warmupTicks; i++){
                Graph.tickFrame();
                // console.log('i',i)
                // end with a animation request
                if (i === (warmupTicks - 1)) {
                    refreshGraph()
                }
            }
        })
        
        // Graph.onEngineStop((e) => console.log('engine stopped!',e))
        // Graph.onEngineTick((e) => console.log('engine tick', e))
        // Graph.onDagError((e) => console.log('dag error', e))
        // Graph.onLoading((e) => console.log('loading', e))
    

         // onNodeHover = { props.onNodeHovered }
        // d3VelocityDecay={0.1}
        // nodeRelSize={20}
        // nodeVisibility={() => {
        //     return !loading
        // }}
        // linkVisibility={() => {
        //     return !loading
        // }}
        // rendererConfig={{
        //     stencil: false,
        //     powerPreference: 'high-performance',
        //     precision: 'lowp',
        // }}
        // nodeLabel={() => ''}
        // enableNodeDrag={false}
        // onNodeClick={(node: any) => {
        //     if (node.type === 'sun') {
        //         mapRef?.current?.zoomToFit(600,100)
        //         }
        //     props.onNodeClicked(node)
        // }}
        // backgroundColor={'#f1f1f1'}
        // nodeAutoColorBy="type"
        // linkThreeObject={linkObject}
        // nodeThreeObject={(node: any) => {
        //     return nodeObject(node)
        // }}

    }, [])
    
    function zoomIt() {
        // setTimeout(() => {
        //     mapRef?.current?.zoomToFit(800, 10)  
        // },800)
    }

    function onPointerMove( event ) {
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
         
        pointer.x = ( (event.clientX - props.xOffset) / props.width ) * 2 - 1;
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }

    function detectPointer() {
        // update the picking ray with the camera and pointer position
        raycaster.setFromCamera( pointer, camera );
    
        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children);

        // console.log('intersects',intersects)
        const nodeIndex = intersects.findIndex(f => f.object && !f.object.isLine && f.object.__data.type !== 'topic')
        const labelIndex = intersects.findIndex(f => f.object && !f.object.isLine && f.object.__data.type === 'topic')
        // on hover

        let hoveredObject = null

        if (nodeIndex > -1) {
            hoveredObject = intersects[nodeIndex].object.__data
        } else if (labelIndex > -1){
            hoveredObject = intersects[labelIndex].object.__data
        } else {
            hoveredObject = null
        }

        props.onNodeHovered(hoveredObject)
        selectedObject = hoveredObject
    }

    useLayoutEffect(() => {
        document.getElementById('3d-graph')?.appendChild(renderer.domElement);
        // Kick-off renderer
        if (!rendererStarted) {
            (function animate() {
                // Frame cycle
                requestAnimationFrame(animate);
                controls.update()
                renderer.render(scene, camera);
            })();
            rendererStarted = true
        }
    }, [])
    
    useEffect(() => {
        renderer.setSize(props.width, props.height);
        camera.aspect = props.width / props.height;
        updateCamera()
    }, [props.width, props.height])

    // useEffect(() => {
    //     setLoading(true)
    // },[props.currentSearchTerm])
    
     // update graph
    useEffect(() => {
        setLoading(true)
        nodeMaterials = {}
        Graph.clear()
        Graph.graphData(props.graphData);
        updateCamera()
    }, [props.graphData])

    function updateCamera(){
        const N = props.graphData?.nodes?.length
        camera.lookAt(Graph.position);
        camera.position.z = Math.cbrt(N) * 180;
        camera.updateProjectionMatrix(); 
    }

    async function refreshGraph() {
        setLoading(false)
        setLoadingTicks(0)
    }

    useLayoutEffect(() => {
        if (props.openingAnimation) zoomIt()
        else {
            if (!loading) zoomIt()
        }
    }, [props.openingAnimation, loading])
    

    const nodeObject = (node) => {
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


        const loader = new THREE.TextureLoader()

        loader.requestHeader = {
            'Access-Control-Allow-Origin': window.location.origin,    
        } 

        let material = null

        if (nodeMaterials[img]) {
            material = nodeMaterials[img]
        } else {
            const map = loader.load(img);
            material = new THREE.SpriteMaterial({
                map: map,
            });
            nodeMaterials[img] = material
        }
          
        const sprite = new THREE.Sprite(material);
    
        sprite.scale.set(30, 30, 1);

        return sprite
    }
      
    const linkObject = () => {
        const material = new THREE.LineBasicMaterial({
            opacity: 0.5,
            transparent:true,
            color: '#000000',
        });
        const geometry = new THREE.BufferGeometry();
        const line = new THREE.Line(geometry, material);
    
        return line
    }

    const percent = loadingTicks / warmupTicks

    return <div style={{ height: '100%', width: '100%', position: 'relative' }}>

        <div onMouseMove={(e) => {
            onPointerMove(e)
            detectPointer()
        }} onClick={() => {
            if (selectedObject) props.onNodeClicked(selectedObject)
        }}
            id="3d-graph"></div>
   
        <Shield style={{ opacity: loading ? 1 : 0 }}>

            {/* <div style={{
                height: 50, width: warmupTicks,
                border: '1px solid #000',
                marginBottom:10
            }}>
                <div style={{
                    height: '100%',
                    width: `${percent}%`,
                    background: '#000',
                    transition:'0.5 s'
                    
                }} />
            </div> */}
            <div style={{display:'flex'}}>
                <ClipLoader color={'#000'} loading={true} size={14} />
                <div style={{ marginLeft: 10 }}>Mapping {props.graphData?.nodes?.length} results...</div>
            </div>
        </Shield>
        
        {!props.graphData?.nodes?.length && <Shield>
            <div>No results</div>
        </Shield>
        }

        </div>
}

function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    
    const { width, height, graphData, currentSearchTerm } = prevProps
    
    if (width !== nextProps.width
        || height !== nextProps.height
        || graphData !== nextProps.graphData
        || currentSearchTerm !== nextProps.currentSearchTerm) {
        return false
    }
    
    return true
  }

export default React.memo(UniverseBrowser, areEqual);

const Shield = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
position: absolute;
pointer-events:none;
top: 0px;
left: 0px;
height: 100%;
width: 100%;
background:#f1f1f1;
color:#000;
transition: opacity 0.5s;
`