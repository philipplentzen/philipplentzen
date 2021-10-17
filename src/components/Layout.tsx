import React, { useState } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"
import { MenuContext } from "../context/MenuContext"
import { Wip } from "./modals/Wip"

interface LayoutProps {
  path: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {/*<Wip />*/}
      <Navigation />
      <section className="content" id="main">
        <Header />
        <main>{children}</main>
      </section>
      <Footer />
    </MenuContext.Provider>
  )
}

export default Layout
