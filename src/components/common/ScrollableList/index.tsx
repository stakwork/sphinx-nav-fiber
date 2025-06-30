import { Html, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

/** How many “screens” tall the scroll content is.
 *  If you have N items stacked one after another, pages = N.
 *  Feel free to tweak (e.g. pages = items.length / 3 for 3 per screen). */
const PAGE_COUNT = 6

export const ScrollableList = () => {
  const scroll = useScroll() // gives us .offset, .delta, etc.

  /* Example: use scroll offset to drive some animation or state */
  useFrame(() => {
    console.log(scroll?.offset)
    // scroll.offset is 0 → 1 over the whole scroll range
    // console.log(scroll.offset)
  })

  return (
    /* ScrollControls creates the virtual scroll bar.
       distance = 1 keeps the content at the camera’s position (HUD-style).
       damping gives it a bit of inertia. */
    <ScrollControls damping={0.15} horizontal={false} pages={PAGE_COUNT}>
      {/* Everything inside <Scroll> moves with the scroll */}
      <Scroll>
        {/* You can mix 3D and Html.  Here we stack 6 “cards” downwards. */}
        {[...Array(PAGE_COUNT)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <group key={i} position={[0, -i * 16, 0]}>
            <mesh>
              <boxGeometry args={[140, 80, 0.05]} />
              <meshStandardMaterial color="#3f87ff" />
            </mesh>

            {/* Html always faces the camera; pointerEvents=none lets events fall through */}
            <Html
              center
              position={[0, 0, 0.051]} // a hair in front of the box
              style={{
                fontFamily: 'Inter, sans-serif',
                color: 'white',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              Item #{i + 1}
            </Html>
          </group>
        ))}
      </Scroll>
    </ScrollControls>
  )
}
