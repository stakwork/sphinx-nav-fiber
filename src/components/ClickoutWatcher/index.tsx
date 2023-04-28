import { PropsWithChildren, useCallback, useEffect, useRef } from 'react'

type Props = PropsWithChildren<{
  onClickOut: () => void
}>

export const ClickoutWatcher = ({ children, onClickOut }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClickOut()
      }
    },
    [onClickOut],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return <div ref={wrapperRef}>{children}</div>
}
