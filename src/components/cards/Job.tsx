import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

/**
 * Props
 */
interface IJobProps {
  job: {
    title: string
    type: string
    company: string
    duration: string
    description: string
  }
  logo: IGatsbyImageData
}

/**
 * Job
 */
export const Job: React.FC<IJobProps> = ({ job, logo }) => {
  const { title, type, company, duration, description } = job

  return (
    <div className="row job">
      <div className="column" sm={2}>
        <GatsbyImage image={logo!} alt={company} />
      </div>
      <div className="column" sm={10}>
        <h4>{title}</h4>
        <p className="light">
          {company + " - " + type}
          <br />
          {duration}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}
