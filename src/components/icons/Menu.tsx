import React, { useCallback, useContext, useRef } from "react"
import { MenuContext } from "../../context/MenuContext"
import {
  entryMenuAnimation,
  exitMenuAnimation,
} from "../../animations/navigation"
import { entryIndexAnimation, exitIndexAnimation } from "../../animations/pages"

interface MenuProps {}

export const Menu: React.FunctionComponent<MenuProps> = () => {
  const { setIsOpen } = useContext(MenuContext)
  const frame = useRef<number>(0)

  const handleMenuClick = useCallback(() => {
    setIsOpen(isOpen => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => openClose(isOpen))
      return !isOpen
    })
  }, [])

  const openClose = useCallback((isOpen: boolean) => {
    const body = document.querySelector("body .tl-wrapper") as HTMLElement
    if (body != null) {
      if (isOpen) {
        exitMenuAnimation()
        if (window.location.pathname === "/") {
          setTimeout(() => entryIndexAnimation({ node: body }), 900)
        }
      } else {
        let timeout = 0
        if (window.location.pathname === "/") {
          exitIndexAnimation({ node: body })
          timeout = 900
        }
        setTimeout(() => entryMenuAnimation(), timeout)
      }
    }
  }, [])

  return (
    <button id="full-page-navigation" onClick={handleMenuClick}>
      <span />
      <span />
      <span />
    </button>
  )
}
