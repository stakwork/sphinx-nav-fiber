import { Html, Float } from "@react-three/drei";

type Props = {
    children: React.ReactNode;
    speed?: number;
    intensity?: number;
    style?: Record<string, unknown>;
};

export const HtmlPanel = ({ speed = 2, intensity = 8, style, children }: Props) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Float
    floatingRange={[1, 2]}
    floatIntensity={intensity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    speed={speed} // Animation speed, defaults to 1
    ><Html
    center
    onClick={e => e.stopPropagation()}
    onKeyDown={e=>e.stopPropagation()}
    onPointerDown={e => e.stopPropagation()}
    onPointerOut={e=>e.stopPropagation()}
    onPointerOver={e=>e.stopPropagation()}
    onPointerUp={e=>e.stopPropagation()}
    
    scale={6}
    sprite
    transform
    >
            <div
            onPointerDown={e=>e.stopPropagation()}
            onPointerOut={e=>e.stopPropagation()}
            onPointerOver={e=>e.stopPropagation()}
            onPointerUp={e=>e.stopPropagation()}
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
)
    
    
