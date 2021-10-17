import React from "react"

interface IMenuContext {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = React.createContext<IMenuContext>({
  isOpen: false,
  setIsOpen: () => null,
})
