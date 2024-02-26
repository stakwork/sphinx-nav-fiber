import { useMemo, useState } from 'react'
import { HelperContext } from './context'

export const Helper = () => {
  const [isShow, setIsShow] = useState(false)

  const contextValue = useMemo(() => ({ isShow, setIsShow }), [isShow])

  return (
    <HelperContext.Provider value={contextValue}>
      {/* <OpenHelperBtn /> */}
      {/* <HelperContent /> */}
    </HelperContext.Provider>
  )
}
