import React from "react"
import { Logo } from "./icons/Logo"
import { Menu } from "./icons/Menu"

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header>
      <div>
        <Menu />
      </div>
      <Logo />
      <div />
    </header>
  )
}
