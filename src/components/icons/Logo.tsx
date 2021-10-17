import React, { useMemo } from "react"
import { entryIndexAnimation, exitAnimation } from "../../animations/pages"
import TransitionLink from "gatsby-plugin-transition-link"

interface LogoProps {}

const isBrowser = typeof window !== "undefined"

export const Logo: React.FunctionComponent<LogoProps> = () => {
  const path = useMemo(
    () => (isBrowser ? window.location.pathname : ""),
    undefined
  )

  return (
    <TransitionLink
      to="/"
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
          entryIndexAnimation(props)
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#f6f7eb"
        stroke="#f6f7eb"
        width="107"
        height="64.106"
        viewBox="0 0 107 64.106"
      >
        <g id="Logo" transform="translate(-11.02 -11.85)">
          <path
            d="M11.68,41.762V12.35H35.11a7.45,7.45,0,0,1,2.875.566,4.851,4.851,0,0,1,1.734,1.639,9.614,9.614,0,0,1,.858,2.643,22.785,22.785,0,0,1,.249,3.527v.515a24.211,24.211,0,0,1-.489,4.909,6.4,6.4,0,0,1-1.682,3.03,5.3,5.3,0,0,1-3.476,1.013H15.559V41.762Zm3.879-14.787H34.595a2.22,2.22,0,0,0,1.5-.541,4.231,4.231,0,0,0,.687-1.8,25.435,25.435,0,0,0,.18-3.407v-.566a15.352,15.352,0,0,0-.429-3.965,1.771,1.771,0,0,0-1.871-1.3h-19.1Z"
            transform="translate(-0.023 0)"
          />
          <path
            d="M29.52,41.762V12.35h3.871v12.3h4.428V12.35H41.7V41.762H37.819V27.893H33.391V41.762Z"
            transform="translate(14.613 0)"
          />
          <path
            d="M49.18,21.6V12.35h3.888V21.6Z"
            transform="translate(11.826 20.158)"
          />
          <path
            d="M49.18,27.7V12.35h3.888V27.7Z"
            transform="translate(11.826 0)"
          />
          <path
            d="M59.18,50.344V12.35h3.879V47.083h5.527v3.261Z"
            transform="translate(10.408 0)"
          />
          <path
            d="M73.24,21.6V12.35h3.888V21.6Z"
            transform="translate(8.414 20.158)"
          />
          <path
            d="M73.24,27.7V12.35h3.888V27.7Z"
            transform="translate(8.414 0)"
          />
          <path
            d="M83.25,41.762V12.35h6.265a7.549,7.549,0,0,1,2.875.566,4.852,4.852,0,0,1,1.734,1.639,9.492,9.492,0,0,1,.85,2.643,21.769,21.769,0,0,1,.249,3.527v.515a24.549,24.549,0,0,1-.481,4.909,6.453,6.453,0,0,1-1.691,3.03,5.263,5.263,0,0,1-3.476,1.013H87.121V41.762Zm3.871-14.787h1.871a2.253,2.253,0,0,0,1.51-.541,4.189,4.189,0,0,0,.678-1.8,23.859,23.859,0,0,0,.189-3.407v-.566a15.111,15.111,0,0,0-.438-3.965,1.765,1.765,0,0,0-1.871-1.3h-1.94Z"
            transform="translate(6.995 0)"
          />
          <path
            d="M83.25,41.762V12.35h6.265a7.549,7.549,0,0,1,2.875.566,4.852,4.852,0,0,1,1.734,1.639,9.492,9.492,0,0,1,.85,2.643,21.769,21.769,0,0,1,.249,3.527v.515a24.549,24.549,0,0,1-.481,4.909,6.453,6.453,0,0,1-1.691,3.03,5.263,5.263,0,0,1-3.476,1.013H87.121V41.762Zm3.871-14.787h1.871a2.253,2.253,0,0,0,1.51-.541,4.189,4.189,0,0,0,.678-1.8,23.859,23.859,0,0,0,.189-3.407v-.566a15.111,15.111,0,0,0-.438-3.965,1.765,1.765,0,0,0-1.871-1.3h-1.94Z"
            transform="translate(22.298 0)"
          />
          <path
            d="M29.52,81.023V51.62h3.871V77.762h5.536v3.261Z"
            transform="translate(-18 -5.567)"
          />
          <path
            d="M43.54,79.18V38.62h9.243v3.287H47.419V57.338H52.5V60.6H47.419V75.884h5.476v3.3Z"
            transform="translate(-18.271 -3.724)"
          />
          <path
            d="M58.64,81.023V51.62h2.987l6.565,19.027-.326-8.308V51.62h3.45v29.4H68.51L62,61.644l.223,7.535V81.023Z"
            transform="translate(-18.816 -5.567)"
          />
          <path
            d="M79.857,81.023V54.907H76.51V51.62H86.852v3.287H83.711V81.023Z"
            transform="translate(-20.491 -5.567)"
          />
          <path
            d="M90.31,82.441V79.033l6.085-14.126H90.868V61.62h9.569v3.055l-6.085,14.47H100.3v3.3Z"
            transform="translate(-21.589 -6.985)"
          />
          <path
            d="M105.67,81.023V51.62h16.967v3.287H109.549V64.33h5.081v3.261h-5.081V77.727h13.2v3.3Z"
            transform="translate(-22.908 -5.567)"
          />
          <path
            d="M120.78,72.779v-29.4h2.987L130.332,62.4,130,54.1V31.62h3.459V72.779H130.65L124.136,53.4l.215,7.535V72.779Z"
            transform="translate(-16.468 2.676)"
          />
        </g>
      </svg>
    </TransitionLink>
  )
}
