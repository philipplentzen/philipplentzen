import React, { useCallback, useContext, useEffect, useRef } from "react"
import { entryDefaultAnimation, entryIndexAnimation } from "../animations/pages"
import TransitionLink from "gatsby-plugin-transition-link"
import { StaticImage } from "gatsby-plugin-image"
import { exitMenuAnimation } from "../animations/navigation"
import { MenuContext } from "../context/MenuContext"
import { gsap } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"

interface NavigationProps {}

export const Navigation: React.FunctionComponent<NavigationProps> = () => {
  const { setIsOpen } = useContext(MenuContext)
  const navContainer = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)

  useEffect(() => {
    gsap.registerPlugin(CSSRulePlugin)
    document.body.addEventListener("mousemove", handleMouseMove)

    document.body.addEventListener("touchstart", handleTouchstart)

    document.body.addEventListener("click", handleClick)

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("touchstart", handleTouchstart)
      document.body.removeEventListener("click", handleClick)
    }
  })

  const handleMouseMove = (event: MouseEvent) => {
    const target = event.target as Element
    const origin = document.querySelector("a.current")
    if (origin != null) {
      if (target.tagName.toLowerCase() === "a") {
        cancelAnimationFrame(frame.current)
        frame.current = requestAnimationFrame(() => move(target, origin))
      } else {
        cancelAnimationFrame(frame.current)
        frame.current = requestAnimationFrame(reset)
      }
    }
  }

  const handleTouchstart = () => {
    document.body.removeEventListener("mousemove", handleMouseMove)
  }

  const handleClick = () => {
    const elements = [
      CSSRulePlugin.getRule("nav.header .main-menu li a.current::before"),
      CSSRulePlugin.getRule("nav.header .main-menu li a.current::after"),
    ]
    gsap.set(elements, { cssRule: { top: 0 } })
    gsap.set(elements[0], { cssRule: { left: 0 } })
    gsap.set(elements[1], { cssRule: { right: 0 } })
  }

  const move = useCallback((target: Element, origin: Element) => {
    const offsetY =
      target.getBoundingClientRect().y - origin.getBoundingClientRect().y
    const offsetX =
      (target.getBoundingClientRect().width -
        origin.getBoundingClientRect().width) /
      2
    const elements = [
      CSSRulePlugin.getRule("nav.header .main-menu li a.current::before"),
      CSSRulePlugin.getRule("nav.header .main-menu li a.current::after"),
    ]
    gsap.to(elements, { cssRule: { top: offsetY }, duration: 0.3 })
    gsap.to(elements[0], { cssRule: { left: -offsetX }, duration: 0.3 })
    gsap.to(elements[1], { cssRule: { right: -offsetX }, duration: 0.3 })
  }, [])

  const reset = useCallback(() => {
    const elements = [
      CSSRulePlugin.getRule("nav.header .main-menu li a.current::before"),
      CSSRulePlugin.getRule("nav.header .main-menu li a.current::after"),
    ]
    gsap.to(elements, { cssRule: { top: 0 }, duration: 0.3 })
    gsap.to(elements[0], { cssRule: { left: 0 }, duration: 0.3 })
    gsap.to(elements[1], { cssRule: { right: 0 }, duration: 0.3 })
  }, [])

  return (
    <nav className="header" ref={navContainer}>
      <div className="transition" />
      <ul className="main-menu">
        <li>
          <TransitionLink
            to="/"
            activeClassName="current"
            exit={{
              delay: 0,
              length: 0,
              trigger: () => {
                setIsOpen(false)
                exitMenuAnimation()
              },
            }}
            entry={{
              delay: 1,
              length: 1,
              trigger: props => {
                entryIndexAnimation(props)
              },
            }}
          >
            Startseite
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            to="/about"
            activeClassName="current"
            exit={{
              delay: 0,
              length: 0,
              trigger: () => {
                setIsOpen(false)
                exitMenuAnimation()
              },
            }}
            entry={{
              delay: 1,
              length: 1,
              trigger: props => {
                entryDefaultAnimation(props)
              },
            }}
          >
            Über mich
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            to="/portfolio"
            activeClassName="current"
            exit={{
              delay: 0,
              length: 0,
              trigger: () => {
                setIsOpen(false)
                exitMenuAnimation()
              },
            }}
            entry={{
              delay: 0.9,
              length: 1,
              trigger: props => {
                entryDefaultAnimation(props)
              },
            }}
          >
            Portfolio
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            to="/resume"
            activeClassName="current"
            exit={{
              delay: 0,
              length: 0,
              trigger: () => {
                setIsOpen(false)
                exitMenuAnimation()
              },
            }}
            entry={{
              delay: 0.9,
              length: 1,
              trigger: props => {
                entryDefaultAnimation(props)
              },
            }}
          >
            Lebenslauf
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            to="/contact"
            activeClassName="current"
            exit={{
              delay: 0,
              length: 0,
              trigger: () => {
                setIsOpen(false)
                exitMenuAnimation()
              },
            }}
            entry={{
              delay: 0.9,
              length: 1,
              trigger: props => {
                entryDefaultAnimation(props)
              },
            }}
          >
            Kontakt
          </TransitionLink>
        </li>
      </ul>
      <ul className="social-menu">
        <li>
          <a href="https://github.com/philipplentzen" target="_blank">
            <i className="devicon-github-original-wordmark" />
          </a>
        </li>
        <li>
          <a
            href="https://de.linkedin.com/in/philipp-lentzen-88a4b41a1"
            target="_blank"
          >
            <i className="devicon-linkedin-plain-wordmark" />
          </a>
        </li>
      </ul>
      <div className="copyright">
        <span>Copyright &copy; 2021 Philipp Lentzen. All rights reserved.</span>
      </div>
      <div className="decoration">
        <StaticImage
          src="../images/nav_background.png"
          alt="Grassy decoration"
          placeholder="blurred"
        />
      </div>
    </nav>
  )
}
