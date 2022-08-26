import * as THREE from 'three'

export const linkObject = () => {

    let lineWidth = 1

    const lineMaterial = new THREE.LineBasicMaterial({
        opacity: 0.6,
        transparent:true,
        color: '#000000',
        lineWidth
    });

    const geometry = new THREE.BufferGeometry();
    
    const line = new THREE.Line(geometry, lineMaterial);

    return line
}

export function getNodeScale(nodeType) {
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
    return [scale*2, enlarge*2]
}