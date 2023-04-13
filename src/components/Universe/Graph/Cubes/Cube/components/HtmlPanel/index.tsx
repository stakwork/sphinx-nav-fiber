import { Html, Float } from "@react-three/drei";
import styled from "styled-components";

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
            <HtmlWrap
                height={style?.height||500}
                left={style?.left||-680}
                onPointerDown={e => e.stopPropagation()}
                onPointerOut={e => e.stopPropagation()}
                onPointerOver={e => e.stopPropagation()}
                onPointerUp={e => e.stopPropagation()}
                top={style?.top||-200}
                width={style?.width||500}>
                    {children}
            </HtmlWrap>
      </Html>
    </Float>
)

type HtmlWrapProps = {
    top: number;
    left: number;
    width: number;
    height: number;
}
    
const HtmlWrap = styled.div<HtmlWrapProps>`
position: absolute;
top: ${p =>`${p.top}px`};
left: ${p =>`${p.left}px`};
border-radius: 20px;
box-shadow:-46px -26px #5078f2;
width: ${p => `${p.width}px`};
height: ${p => `${p.height}px`};
font-size: 80px; 
color: #fff;
padding: 20px; 
border: solid 8px #5078f2;
background: #00000099;
overflow-y: auto;
`
