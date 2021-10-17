import React from "react"
import { Helmet } from "react-helmet"
import { Head } from "../components/Head"
import { Title } from "../components/text/Title"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Job } from "../components/cards/Job"
import { Training } from "../components/cards/Training"

/**
 * Props
 */
interface ExperienceProps {}

/**
 * jobs
 */
const ExperiencePage: React.FC<ExperienceProps> = () => {
  const data = useStaticQuery(
    graphql`
      {
        jobs: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/jobs/" } }
        ) {
          edges {
            node {
              frontmatter {
                logo {
                  childImageSharp {
                    gatsbyImageData(
                      width: 139
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                title
                type
                company
                duration
                description
              }
            }
          }
        }
        trainings: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/training/" } }
          sort: { fields: id, order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                logo {
                  childImageSharp {
                    gatsbyImageData(
                      width: 139
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                title
                highschool
                duration
              }
              id
            }
          }
        }
      }
    `
  )

  const jobs = data.jobs.edges
  const trainings = data.trainings.edges

  console.log(trainings)

  return (
    <>
      <Helmet bodyAttributes={{ class: "about light" }} />
      <Head title="Lebenslauf" url="/resume" />

      <Title title="Lebenslauf" subTitle="" />

      <div className="row">
        <div className="column" sm={12}>
          <article>
            <h3>Berufserfahrung</h3>
            {jobs &&
              jobs.map(({ node }) => (
                <Job
                  job={node.frontmatter}
                  logo={getImage(node.frontmatter.logo)!}
                />
              ))}
          </article>
          <article>
            <h3>Ausbildung</h3>
            {trainings &&
              trainings.map(({ node }) => (
                <Training
                  training={node.frontmatter}
                  logo={getImage(node.frontmatter.logo)!}
                />
              ))}
          </article>
        </div>
      </div>
    </>
  )
}

export default ExperiencePage
