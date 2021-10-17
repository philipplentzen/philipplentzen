import React, { useCallback, useEffect, useRef } from "react"
import { Head } from "../components/Head"
import { StaticImage } from "gatsby-plugin-image"
import { Title } from "../components/text/Title"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"

interface IndexPageProps {}

const IndexPage: React.FunctionComponent<IndexPageProps> = () => {
  const titleContainer = useRef<HTMLDivElement>(null)
  const imgContainer = useRef<HTMLDivElement>(null)
  const descriptionContainer = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const mouse = useRef<[number, number]>([0, 0])
  const center = useRef<[number, number]>([0, 0])

  useEffect(() => {
    document.body.addEventListener("touchstart", () => {
      document.body.removeEventListener("mousemove", handleMouseMove)
    })
    document.body.addEventListener("mousemove", handleMouseMove)
    center.current = [window.innerWidth / 2, window.innerHeight / 2]

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleMouseMove = (event: MouseEvent) => {
    mouse.current = [event.pageX, event.pageY]

    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(update)
  }

  const update = useCallback(() => {
    parallax(imgContainer.current!.querySelector(".me"), 3)
    parallax(titleContainer.current!, 15)
  }, [])

  const parallax = useCallback((element: Element | null, amount: number) => {
    const dx =
      ((mouse.current[0] - center.current[0]) / center.current[0]) * amount
    const dy =
      ((mouse.current[1] - center.current[1]) / center.current[0]) * amount
    gsap.set(element, { x: -dx, y: -dy, rotateX: -dx, rotateY: dy })
  }, [])

  return (
    <>
      <Head title="" url="" />
      <Helmet
        bodyAttributes={{ class: "home" }}
        title="Philipp Lentzen - <web entwickler/> mit Passion für UX & UI"
        titleTemplate={undefined}
      />
      <Title
        title="Hallo"
        subTitle="myName = 'Philipp';"
        isLanding
        ref={titleContainer}
      />
      <div className="description" ref={descriptionContainer}>
        <h2>
          <span>&lt;web entwickler/&gt;</span>
          <br />
          mit Passion für <b>UX & UI</b>
        </h2>
      </div>
      <div className="background" ref={imgContainer}>
        <StaticImage
          src="../images/me.png"
          alt="Me, Myself and I"
          className="me"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/me_overlay.png"
          alt="Some grassy stuff"
          className="grass"
          placeholder="blurred"
        />
      </div>
    </>
  )
}

export default IndexPage
