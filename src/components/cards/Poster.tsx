import React from "react"
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import {
  entryDefaultAnimation,
  exitDefaultAnimation,
} from "../../animations/pages"
import TransitionLink from "gatsby-plugin-transition-link"
import { Title } from "../text/Title"
import { Technology } from "../icons/Technology"

/**
 * Props
 */
interface IPosterProps {
  title: string
  cover: IGatsbyImageData
  slug: string
  wip: boolean
  tech: string[]
}

/**
 * Poster
 */
export const Poster: React.FC<IPosterProps> = ({
  title,
  cover,
  slug,
  wip,
  tech,
}) => {
  console.log(tech)
  return (
    <TransitionLink
      to={slug}
      className={clsx("poster", title.replace(" ", "_"))}
      exit={{
        delay: 0,
        length: 1,
        trigger: props => {
          exitDefaultAnimation(props)
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
      <GatsbyImage image={cover} alt={title} />
      <StaticImage
        src={"../../images/poster_overlay.png"}
        alt="Poster texture"
        className="overlay"
        placeholder="blurred"
      />
      <div className="tech">
        {tech && tech.map((name: string) => <Technology tech={name} />)}
      </div>
      {wip && <Title title="" subTitle="Draft" />}
    </TransitionLink>
  )
}
