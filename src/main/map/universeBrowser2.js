import React, {useEffect,useLayoutEffect,useState} from 'react';
import SpriteText from 'three-spritetext'
import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";
import ThreeForceGraph from 'three-forcegraph';
import * as THREE from 'three'
import CameraControls from 'camera-controls';

CameraControls.install({ THREE: THREE });

//constructor
let graph, scene, renderer, camera, cameraControls, light, raycaster, pointer, clock

let nodeMaterials = {}
const warmupTicks = 20

function UniverseBrowser(props) {
    const [loading, setLoading] = useState(false)
    

    // initialize graph with config
    useLayoutEffect(() => {

        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2();
        clock = new THREE.Clock();
        graph = new ThreeForceGraph()
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xf1f1f1 );
        scene.add(graph);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(props.width, props.height);
        document.getElementById('3d-graph')?.appendChild(renderer.domElement);
        camera = new THREE.PerspectiveCamera();
        camera = new THREE.PerspectiveCamera( 60, props.width / props.height, 0.01, 100000 );
        camera.position.set( 0, 0, 5 );

        cameraControls = new CameraControls(camera, renderer.domElement);

        // cameraControls.dampingFactor = 0.001 //default is 0.05, less is more
        // cameraControls.draggingDampingFactor = 0.01 // default is 0.25

        cameraControls.minZoom = -Infinity
        cameraControls.maxZoom = Infinity

        cameraControls.addEventListener('control', (e) => {
            console.log('control', e)
            console.log('cameraControls.distance',cameraControls.distance)
        })

        cameraControls.addEventListener('controlstart', (e) => {
            console.log('controlstart', e)
        })

        cameraControls.addEventListener('controlend', (e) => {
            console.log('controlend', e)  
        })
        
        clock = new THREE.Clock();
        
        light = new THREE.AmbientLight(0xbbbbbb)
        scene.add(light);
        
        graph.nodeThreeObject(nodeObject)
        graph.linkThreeObject(linkObject)
        graph.d3VelocityDecay(0.05)
     
        graph.onFinishUpdate(() => {
            for (let i = 0; i < warmupTicks; i++){
                graph.tickFrame();
                console.log('i', i)
                // end with a animation request
                if (i === (warmupTicks - 1)) {
                    refreshGraph()
                    
                }
            }
        })

        renderer.render( scene, camera );
        
        (function animate() {    
            // Frame cycle
            const delta = clock.getDelta();
            const hasControlsUpdated = cameraControls.update(delta);
            requestAnimationFrame(animate);
            if (!loading && hasControlsUpdated) renderer.render(scene, camera);
        })();

    }, [])

    function animateFrame() {    
        // Frame cycle
        const delta = clock.getDelta();
        cameraControls.update(delta);
        requestAnimationFrame(()=>console.log("animate frame"));
        renderer.render(scene, camera);
    }
    
    function zoomIt(distance = 3000, zoom = 0.00001) {
        if (!props.openingAnimation) {
            console.log(distance,zoom)
            cameraControls.distance = distance
            cameraControls.zoomTo(zoom, true )
            requestAnimationFrame(() => console.log('animate'))
            
            // cameraControls.fitToBox( mesh, true, { cover: true } );
            renderer.render(scene, camera);
        }
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
    }

    function detectPointerClick() {
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

        if (hoveredObject) props.onNodeClicked(hoveredObject)
    }
    
    useEffect(() => {
        renderer.setSize(props.width, props.height);
        camera.aspect = props.width / props.height;
        updateCamera()
    }, [props.width, props.height])
    
     // update graph
    useEffect(() => {
        setLoading(true)
        nodeMaterials = {}
        graph.clear()
        graph.graphData(props.graphData);
        updateCamera()
    }, [props.graphData])

    function updateCamera(){
        const N = props.graphData?.nodes?.length
        camera.lookAt(graph.position);
        camera.position.z = Math.cbrt(N) * 180;
        camera.updateProjectionMatrix(); 
        
        animateFrame()
    }

    async function refreshGraph() {
        setLoading(false)
        updateCamera()

        zoomIt()
    }

    // useLayoutEffect(() => {
    //     if (!loading) zoomIt()
    // }, [loading])
    

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

    return <div style={{ height: '100%', width: '100%', position: 'relative' }}>

        <div onMouseMove={(e) => {
            onPointerMove(e)
            detectPointer()
        }} onMouseDown={() => {
            detectPointerClick()
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