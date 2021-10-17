import React, { useMemo } from "react"
import { entryDefaultAnimation, exitAnimation } from "../animations/pages"
import { useLocation } from "@reach/router"
import TransitionLink from "gatsby-plugin-transition-link"

interface FooterProps {}

const isBrowser = typeof window !== "undefined"

export const Footer: React.FunctionComponent<FooterProps> = () => {
  useLocation()
  const path = useMemo(
    () => (isBrowser ? window.location.pathname : ""),
    undefined
  )
  return (
    <footer>
      <div className="contact">
        <a href="mailto:kontakt@philipplentzen.dev">
          kontakt@philipplentzen.dev
        </a>
      </div>
      <div className="legal">
        <ul>
          <li>
            <TransitionLink
              to="/impressum"
              activeClassName="current"
              exit={{
                delay: 0,
                length: 0,
                trigger: props => {
                  exitAnimation(path, props)
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
              Impressum
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              to="/privacy"
              activeClassName="current"
              exit={{
                delay: 0,
                length: 0.9,
                trigger: props => {
                  exitAnimation(path, props)
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
              Datenschutz
            </TransitionLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}
