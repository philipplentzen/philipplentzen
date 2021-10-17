import { gsap } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"

export const entryMenuAnimation = () => {
  gsap.registerPlugin(CSSRulePlugin)
  gsap
    .timeline()
    .set("nav.header", {
      opacity: 1,
      display: "block",
      visibility: "visible",
    })
    .to(CSSRulePlugin.getRule("nav.header .transition::before"), {
      cssRule: {
        xPercent: -96,
        yPercent: 0,
      },
      ease: "steps(24)",
      duration: 1,
    })
    .to("nav.header .main-menu li", {
      x: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 0.3,
      stagger: 0.1,
    })
    .to("nav.header .social-menu li", {
      x: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 0.3,
      stagger: 0.1,
    })
    .to(
      "nav.header .decoration",
      {
        bottom: -5,
        ease: "power2.inOut",
        duration: 0.3,
      },
      "<"
    )
    .to(
      "nav.header .copyright",
      {
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.3,
      },
      "<"
    )
}

export const exitMenuAnimation = () => {
  gsap.registerPlugin(CSSRulePlugin)
  gsap
    .timeline()
    .to("nav.header .social-menu li", {
      x: -10,
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.3,
      stagger: -0.1,
    })
    .to("nav.header .main-menu li", {
      x: -10,
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.3,
      stagger: -0.1,
    })
    .to(
      "nav.header .decoration",
      {
        bottom: "-50%",
        ease: "power2.inOut",
        duration: 0.3,
      },
      "<"
    )
    .to(
      "nav.header .copyright",
      {
        opacity: "0",
        ease: "power2.inOut",
        duration: 0.3,
      },
      "<"
    )
    .to(CSSRulePlugin.getRule("nav.header .transition::before"), {
      cssRule: {
        xPercent: 96,
        yPercent: 0,
      },
      ease: "steps(24)",
      duration: 1,
    })
    .set("nav.header", {
      opacity: 0,
      visibility: "hidden",
      display: "none",
    })
}
