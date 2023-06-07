import { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react'
import { createRoot, Root } from 'react-dom/client'

export const Portal = ({ children }: PropsWithChildren<unknown>) => {
  const [el] = useState(() => document.createElement('div'))
  const rootRef = useRef<Root | null>()

  useLayoutEffect(() => {
    const mount = document.getElementById('tooltip-portal')
    // eslint-disable-next-line no-multi-assign
    const currentRoot = (rootRef.current = createRoot(el))

    mount?.appendChild(el)

    return () => {
      mount?.removeChild(el)
      currentRoot?.unmount()
    }
  }, [children, el])

  useLayoutEffect(() => {
    rootRef.current?.render(<div>{children}</div>)
  })

  return null
}
