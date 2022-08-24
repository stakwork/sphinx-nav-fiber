import React, {useEffect,useLayoutEffect,useState,useRef} from 'react';
import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";
import * as d3 from "d3-force-3d";
import * as THREE from 'three'
import SpriteText from 'three-spritetext'
import ThreeForceGraph from 'three-forcegraph';
import CameraControls from 'camera-controls';
import gsap from 'gsap'
// import {} from './universeBrowserTools'
// import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';
 
THREE.Cache.enabled = true;
CameraControls.install({ THREE: THREE });

//constructor
let graph, scene, renderer, camera, cameraControls, hoveredNode, light, raycaster, pointer, clock, rotateCycle, rotating, moveCycle, moving, searchTermNode, zoomTimeout
let nodeMaterials = {}
const warmupTicks = 20
let nodeStyleCleanedUp = false

const isBrowser = typeof window !== 'undefined';
const isMac = isBrowser && /Mac/.test(navigator.platform);
const deltaYFactor = isMac ? -1 : -3;

let introZoom = true

function UniverseBrowser(props) {
    const [loading, setLoading] = useState(true)
    const universeRef = useRef(null)
    
     // update graph
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            nodeMaterials = {}
            const manybody = d3.forceManyBody().distanceMin(100).distanceMax(2000);
            // const x =  d3.forceX(width / 6).strength(0.3)
            // const y =  d3.forceY().y(function (d, i) { return height / 10 + i * 35; })
            //                     .strength(0.4)
            const distance = d3.forceLink().distance(40).strength(0.1);
                        
            graph.clear()
                .graphData(props.graphData)
                .d3Force("charge", manybody)
                .d3Force("link", distance)
                // .d3Force("link", d3.forceLink(props.graphData.links).distance(500))    
            
            // doSearchTermNodeUpdates()
            updateCamera()    
        },200)
    }, [props.graphData])

    
    // update camera and renderer on resize
    useEffect(() => {
        renderer.setSize(props.width, props.height);
        camera.aspect = props.width / props.height;
        updateCamera()
        // for the effect
        rotateWorld()
    }, [props.width, props.height])

    // initialize graph with config
    useLayoutEffect(() => {

        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2();
        clock = new THREE.Clock();

        graph = new ThreeForceGraph()
                .nodeThreeObject(nodeObject)
                .nodeResolution(20)
                // .nodeRelSize(20)
                .linkThreeObject(linkObject)
                .linkResolution(20)
            
                // .linkMaterial(linkMaterial)
                .d3VelocityDecay(0.001)
                .onFinishUpdate(() => {
                        for (let i = 0; i < warmupTicks; i++){
                            graph.tickFrame();
                            console.log('i', i)
                            // end with a animation request
                            if (i === (warmupTicks - 1)) {
                                refreshGraph()
                            }
                        }
                })
            .d3Force("link", d3.forceLink().strength(0.1))
            .d3Force("center",d3.forceCenter().strength(0.1)) 
            
        
        clock = new THREE.Clock();
        light = new THREE.AmbientLight(0xbbbbbb)
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf1f1f1);
        scene.fog = new THREE.Fog(0xf1f1f1, 0, 10000); 
        scene.add(light);
        scene.add(graph);

        renderer = new THREE.WebGLRenderer()
        renderer.parameters = {
            stencil: false,
            powerPreference: 'high-performance',
            precision: 'lowp',
            // logarithmicDepthBuffer: true
        }

        renderer.setSize(props.width, props.height);
        renderer.setPixelRatio(window.devicePixelRatio);

        universeRef.current.appendChild(renderer.domElement);
        universeRef.current.addEventListener('wheel', (event) => {
            doDollyTransition(event)
        });
        
        camera = new THREE.PerspectiveCamera( 60, props.width / props.height, 0.01, 100000 );
        camera.position.set(0, 0, 5);
        
        cameraControls = new CameraControls(camera, renderer.domElement);
        // replace wheel action for smooth zoom transitions
        cameraControls.mouseButtons.wheel = 0

        cameraControls.minDistance = 200//30000
        cameraControls.maxDistance = Infinity//30000
        cameraControls.minPolarAngle = -Infinity//
        cameraControls.maxPolarAngle = Infinity
        cameraControls.enableTransition = true
        cameraControls.dollySpeed = 0.2 // default is 1
        cameraControls.dampingFactor = 0.1
        // cameraControls.restThreshold = 1
        cameraControls.infinityDolly = true
        cameraControls.enableDamping = true
        cameraControls.dollyToCursor = true
        
        const normalizedAzimuthAngle = THREE.MathUtils.euclideanModulo( cameraControls.azimuthAngle, 360 * THREE.MathUtils.DEG2RAD );
        cameraControls.azimuthAngle = normalizedAzimuthAngle
        renderer.render( scene, camera );
        animate()
    }, [])

    function doSearchTermNodeUpdates() {
        if (scene) {
            if (searchTermNode) {
                searchTermNode._text.set(props.currentSearchTerm)
            }
            else {
                searchTermNode = new SpriteText(props.currentSearchTerm||'Welcome');
                searchTermNode.color = '#000000';
                searchTermNode.textHeight = 120;
                searchTermNode.userData = {
                    type:'searchTerm'
                }
                scene.add(searchTermNode);    
            }
        }
    }


    const doDollyTransition = async (event) => {
        

        // revert damping to default
        if (cameraControls.dampingFactor < 0.1) {
            cameraControls.dampingFactor = 0.1
        }

        let dollyStep = 140
        const distance = cameraControls.distance 
        if (distance < 3000) dollyStep = 40
    
        // scroll back
        if (event.deltaY > 0) dollyStep = dollyStep * -1

        cameraControls.dolly(dollyStep, true)
    }


    function animate() {    
        // Frame cycle
        const delta = clock.getDelta();
        const hasControlsUpdated = cameraControls.update(delta);

        if (hasControlsUpdated) {
            renderer.render(scene, camera);  
        } 
        
        requestAnimationFrame(animate);
    }

    function animateFrame() {    
        // Frame cycle
        const delta = clock.getDelta();
        cameraControls.update(delta);
        cameraControls.distance =  cameraControls.distance + 10
        requestAnimationFrame(() => console.log("animate frame"));
        renderer.render(scene, camera);       
    }

    
    
    function centerCamera(distance = 4000) {
        cameraControls.distance = distance
        cameraControls.setTarget( 0, 0, 0, false )
        requestAnimationFrame(() => console.log('centerCamera'))
        renderer.render(scene, camera);
        setTimeout(() => {
            rotateWorld()
        }, 500)          

        if (introZoom) {
            const gotData = graph.graphData()
            const { x, y, z } = (gotData.nodes.length && gotData.nodes[0]) || {}
            console.log('do camera zoomer',x,y,z)
            if (x&&!zoomTimeout) {
                zoomTimeout = setInterval(async () => {
                    doIntroAnimation()
                    clearInterval(zoomTimeout)
                }, 1000)
                introZoom = false
            }
        }
    }

    function killRotation() {
        rotateCycle.kill()
        rotating = null
    }

    function killMovement() {
        moveCycle.kill()
        moving = null
        
    }

    function doIntroAnimation() {
        if (moving) return
        if (rotating) killRotation()

        // start position
        const { x, y, z } = cameraControls._camera.position
        
        // end position
        // const gotData = graph.graphData()
        // const randIndex = Math.floor(Math.random() * (gotData.nodes.length - 1))
        // const destinationNode = gotData.nodes[randIndex]


        moving = true
        // for intro fly
        const curve = new THREE.CatmullRomCurve3( [
            new THREE.Vector3( x,y,z ),
            new THREE.Vector3(   x-500,y-800,z-900 ),
            new THREE.Vector3(-1900, -2200, -1800)
        ] );
        const points = curve.getPoints( 50 );
        const _tmp = new THREE.Vector3();
        const animationProgress = { value: 0 };
        
        moveCycle = gsap.fromTo(
            animationProgress,
            {
              value: 0,
            },
            {
              value: 1,
              duration: 2,
            paused: true,
              onUpdateParams: [ animationProgress ],
              onUpdate( { value } ) {
          
                      curve.getPoint ( value, _tmp );
                      const cameraX = _tmp.x;
                      const cameraY = _tmp.y;
                      const cameraZ = _tmp.z;
                      const lookAtX = 0;
                      const lookAtY = 0;
                      const lookAtZ = 0;
          
                      cameraControls.setLookAt(
                          cameraX,
                          cameraY,
                          cameraZ,
                          lookAtX,
                          lookAtY,
                          lookAtZ,
                          true
                      );
          
              },
                  onComplete() {
                      moving = null
                      rotateWorld()
                  }
            }
        );
        
        moveCycle.play(0)
        
    }
    

    function lookAt(x1,y1,z1) {
        cameraControls.dampingFactor = 0.05
        // let viewPos = [x1, y1, z1]
        // let distance = cameraControls.distance
        
        cameraControls.setTarget(
            x1,
            y1,
            z1,
            true
        );
    }


    function rotateWorld() {

        if (moving) return 
        
        rotating = true

        rotateCycle = gsap.to(
            cameraControls,
            {
                azimuthAngle: cameraControls.azimuthAngle + 360 * THREE.MathUtils.DEG2RAD,
                duration: 280,
                // https://greensock.com/ease-visualizer/
                ease: 'power',
                overwrite:true,
                paused: true
            },
        );
    
        rotateCycle.play(0);
        
        rotateCycle.eventCallback('onComplete', (e) => {

            rotating = null
        })

        
    }
    

    function onPointerMove( event ) {
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components

        const w = props.width
        const h = props.height
        pointer.x = ( (event.clientX - props.xOffset) / w ) * 2 - 1;
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
        
        // set camera offset
        const mouseX = event.clientX - props.xOffset
        const mouseY = event.clientY
        const xCenter = w/2
        const yCenter = h / 2
        const dampening = 60
        const xOff = (mouseX - xCenter) / dampening
        const yOff = (mouseY - yCenter) / dampening

        cameraControls.setFocalOffset(xOff,yOff,0,true)
    }


    function detectPointer() {
        let hoveredObject = getHoveredObject()
        props.onNodeHovered(hoveredObject)
        doHoveredNodeStyle(hoveredObject)
    }

    function detectPointerClickDown() {
        if (rotating) killRotation()
        if (moving) killMovement()

        let hoveredObject = getHoveredObject()
        hoveredNode = hoveredObject
    }

    function detectPointerClick() {
        let hoveredObject = getHoveredObject()


        if (hoveredNode && hoveredObject
            && hoveredObject.id === hoveredNode.id
            // && (
            //     hoveredNode.node_type === 'clip' || hoveredNode.node_type === 'topic'
            // )
        ) {
            props.onNodeClicked(hoveredObject)
            lookAt(hoveredObject.x,hoveredObject.y,hoveredObject.z)
        }
        hoveredNode = null
    }

    function getHoveredObject() {
        // update the picking ray with the camera and pointer position
        raycaster.setFromCamera( pointer, camera );
    
        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children);

        // console.log('intersects',intersects)
        const nodeIndex = intersects.findIndex(f => f.object && !f.object.isLine && f.object.__data?.type !== 'topic')
        const labelIndex = intersects.findIndex(f => f.object && !f.object.isLine && f.object.__data?.type === 'topic')
        // on hover

        let hoveredObject = null

        if (nodeIndex > -1) {
            hoveredObject = intersects[nodeIndex].object.__data
        } else if (labelIndex > -1){
            hoveredObject = intersects[labelIndex].object.__data
            // intersects[labelIndex].object.scale.set(40, 40, 1);
        } else {
            hoveredObject = null
            nodeStyleCleanedUp = false
        }

        return hoveredObject
    }


    function getNodeScale(nodeType) {
        let scale = 25
        let enlarge = 35
        if (nodeType === 'clip') {
            scale = 20
            enlarge = 30
        } else if (nodeType === 'episode') {
            scale = 30
            enlarge = 40
        } else if (nodeType === 'show') {
            scale = 60
            enlarge = 70
        } else if (nodeType === 'guest') {
            scale = 80
            enlarge = 90
        }
        return [scale, enlarge]
    }

    function doHoveredNodeStyle(node) {
        if (!node && nodeStyleCleanedUp) return
        
        const gotData = graph.graphData()
        gotData.nodes.filter(f=>f.type!=='topic').forEach(n => {
            const index = gotData.nodes.findIndex(f => f.id === n.id)
            let [scale, enlarge] = getNodeScale(n.details?.node_type)
            if (node?.id === n.id) {
                scale = enlarge
            }
            const currentScale = n.__threeObj.scale.x

            if (currentScale !== scale) {
                gotData.nodes[index].__threeObj.scale.set(scale, scale, 0)    
            }
        })
        nodeStyleCleanedUp = true
    }
    

    function updateCamera() {
        const N = props.graphData?.nodes?.length
        camera.lookAt(graph.position);
        camera.position.z = Math.cbrt(N) * 180;
        camera.updateProjectionMatrix();
        animateFrame()
    }

    function refreshGraph() {
        setLoading(false)
        updateCamera()
        centerCamera()
    }

    function blockInteraction(e) {
        if (loading) {
            e.preventDefault()
            e.stopPropagation()
            return
        } 
    }

    const nodeObject = (node) => {
        if (node.fakeData) {
            const sprite = new SpriteText(node.label);
            sprite.color = '#000000';
            sprite.textHeight = 10 + node.scale;

            sprite.parameters = {
                precision:'lowp'
            } 
            return sprite
        }

        let color = (node.colors && node.colors[0]) ? node.colors[0] : 'tomato'
        
        if (node.type === 'topic') {
            const sprite = new SpriteText(node.name);
            sprite.color = color;
            let textSize = 15 + node.scale;
            if (textSize > 100) textSize = 100
            
            sprite.textHeight = textSize

            return sprite;
        }

        let img = node.image_url
        
        switch (node.node_type) {
            case 'clip':
                switch (node.type) {
                    case 'youtube':
                        img = 'youtube_default.jpeg'
                        break;
                    case 'twitter':
                        img = 'twitter_logo.svg'
                        break;
                    default:
                        img = 'audio_default.svg'
                }
                break;
            case 'guest':
                img = 'person_placeholder.png'
                break;
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

        let [scaler, enlarge] = getNodeScale(node.node_type)
    
        sprite.scale.set(scaler, scaler, 1);

        return sprite
    }
      
    const linkObject = () => {
        const lineMaterial = new THREE.LineBasicMaterial({
            opacity: 0.6,
            transparent:true,
            color: '#000000',
        });

        const geometry = new THREE.BufferGeometry();
        
        const line = new THREE.Line(geometry, lineMaterial);
    
        return line
    }


    return <div style={{ height: '100%', width: '100%', position: 'relative' }}>

        <div
            ref={universeRef}
            onMouseMove={(e) => {
            if (loading) blockInteraction(e)
            else {
                onPointerMove(e)
                detectPointer()
            }
            
        }} onMouseDown={(e) => {
            if (loading) blockInteraction(e)
            else detectPointerClickDown()
        }}
            onMouseOut={() => {
            // return offset to 0
            cameraControls.setFocalOffset(0,0,0,true)
        }}
            onMouseUp={(e) => {
                if (loading) blockInteraction(e)
                else detectPointerClick()
            }}
            id="3d-graph"></div>
   
        <Shield style={{ opacity: loading ? 1 : 0 }}>
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
user-select:none;
top: 0px;
left: 0px;
height: 100%;
width: 100%;
background:#f1f1f1;
color:#000;
transition: opacity 0.5s;
`