import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

/**
 * Props
 */
interface ITrainingProps {
  training: {
    title: string
    highschool: string
    duration: string
  }
  logo: IGatsbyImageData
}

/**
 * Training
 */
export const Training: React.FC<ITrainingProps> = ({ training, logo }) => {
  const { title, highschool, duration } = training

  return (
    <div className="row job">
      <div className="column" sm={2}>
        <GatsbyImage image={logo!} alt={highschool} />
      </div>
      <div className="column" sm={10}>
        <h4>{title}</h4>
        <p className="light">
          {highschool}
          <br />
          {duration}
        </p>
      </div>
    </div>
  )
}
