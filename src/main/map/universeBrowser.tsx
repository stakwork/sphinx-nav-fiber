


import {useState, useCallback, useRef, useEffect } from 'react'
import styled from "styled-components";
import { ForceGraph3D } from 'react-force-graph';
import * as three from 'three'
import SpriteText from 'three-spritetext'

export default function UniverseBrowser(props: any) {
    
    const nodeObject = (node: any) => {

        let color = (node.colors && node.colors[0]) ? node.colors[0] : 'tomato'
        
        if (node.type === 'topic') {
            const sprite = new SpriteText(node.name);
            sprite.color = color;
            sprite.textHeight = 10;
            return sprite;
        }

        let img = node.image_url

        if (!img) {
            switch (node.type) {
                case 'youtube':
                    img = 'youtube_logo.svg'
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
    
        const map = new three.TextureLoader().load(node.image_url||'audio_default.svg');
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
        const material = new three.LineBasicMaterial({ color: '#000' });
        const geometry = new three.BufferGeometry();
        const line = new three.Line(geometry, material);
    
        return line
    }

    return <ForceGraph3D
        ref={props.mapRef}
        graphData={props.graphData}
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
    
}