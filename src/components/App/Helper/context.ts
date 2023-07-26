import { Dispatch, SetStateAction, createContext, useContext } from 'react'

const emptyValue = {}

type ContextValue = {
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export const HelperContext = createContext(emptyValue as ContextValue)

export const useHelper = () => useContext(HelperContext)
