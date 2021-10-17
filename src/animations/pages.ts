import { gsap } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"

interface AnimationProps {
  node: HTMLElement
}

export const exitAnimation = (path: string, props: AnimationProps) => {
  console.log(path)
  switch (path) {
    case "/":
      exitIndexAnimation(props)
      break
    default:
      exitDefaultAnimation(props)
      break
  }
}

export const exitIndexAnimation = ({ node }: AnimationProps) => {
  gsap.registerPlugin(CSSRulePlugin)
  gsap
    .timeline()
    .to(node.querySelector(".background .gatsby-image-wrapper.me"), {
      yPercent: 100,
      ease: "power1.inOut",
      duration: 0.6,
    })
    .to(
      node.querySelector(".background .gatsby-image-wrapper.grass"),
      {
        yPercent: 100,
        ease: "power1.inOut",
        duration: 0.6,
      },
      0.1
    )
    .to(
      node.querySelector(".title"),
      {
        left: "0%",
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.3,
      },
      0.2
    )
    .to(
      node.querySelector(".description"),
      {
        left: "100%",
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.3,
      },
      "<"
    )
    .to(
      "section.content#main",
      {
        backgroundColor: "transparent",
        ease: "power1.inOut",
        duration: 0.9,
      },
      0
    )
    .add(exitDefaultAnimation({ node }), 0.3)
}

export const entryIndexAnimation = ({ node }: AnimationProps) => {
  gsap.registerPlugin(CSSRulePlugin)
  gsap
    .timeline()
    .fromTo(
      node.querySelector(".background .gatsby-image-wrapper.me"),
      {
        z: -100,
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "power1.inOut",
        duration: 0.6,
      },
      0.4
    )
    .fromTo(
      node.querySelector(".background .gatsby-image-wrapper.grass"),
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "power1.inOut",
        duration: 0.6,
      },
      0.3
    )
    .fromTo(
      node.querySelector(".title"),
      {
        left: "0%",
        opacity: 0.3,
      },
      {
        left: "50%",
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.3,
      },
      0.5
    )
    .fromTo(
      node.querySelector(".description"),
      {
        left: "100%",
        opacity: 0,
      },
      {
        left: "50%",
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.3,
      },
      "<"
    )
    .fromTo(
      "section.content#main",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "rgba(252,186,4,1)",
        ease: "power1.inOut",
        duration: 0.9,
      },
      0
    )
    .add(entryDefaultAnimation({ node }), 0)
}

export const exitDefaultAnimation = ({ node }: AnimationProps) => {
  return gsap
    .timeline()
    .to(node, {
      opacity: 0,
      duration: 0.3,
    })
    .to(CSSRulePlugin.getRule("body::after"), {
      cssRule: {
        width: 0,
      },
      ease: "power1.inOut",
      duration: 0.6,
    })
}

export const entryDefaultAnimation = ({ node }: AnimationProps) => {
  return gsap
    .timeline()
    .to(CSSRulePlugin.getRule("body::after"), {
      cssRule: {
        width: "100%",
      },
      ease: "power1.inOut",
      duration: 0.6,
    })
    .fromTo(
      node,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
      }
    )
}
