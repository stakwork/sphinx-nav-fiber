import { Html, Float } from "@react-three/drei";


type Props = {
    children:any;
    speed?: number;
    intensity?: number;
    style?: any;
};

export const HtmlPanel = ({ speed = 2, intensity = 8, style, children }: Props) => {

    // @ts-ignore
    return <Float
    speed={speed} // Animation speed, defaults to 1
    floatIntensity={intensity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    floatingRange={[1, 2]}
    ><Html
    onClick={e=>e.stopPropagation()}
    onPointerUp={e=>e.stopPropagation()}
    onPointerOut={e=>e.stopPropagation()}
    onPointerOver={e=>e.stopPropagation()}
    onPointerDown={e => e.stopPropagation()}
    onKeyDown={e=>e.stopPropagation()}
    center
    sprite
    transform
    scale={6}>
            <div
            onPointerUp={e=>e.stopPropagation()}
            onPointerOut={e=>e.stopPropagation()}
            onPointerOver={e=>e.stopPropagation()}
            onPointerDown={e=>e.stopPropagation()}
            style={{
                position: 'absolute',
                top: -200,
                left: -680,
                borderRadius: 20,
                boxShadow:`-46px -26px #5078f2`,
                width: 500, height: 500,
                fontSize: 80, color: '#fff',
                padding: 20, border: 'solid 8px #5078f2',
                background: '#00000099',
                overflowY: 'auto',
                ...style
                    }}>
                    {children}
            </div>
      </Html>
    </Float>
}
    
    
