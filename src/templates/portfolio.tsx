import React from "react"
import { graphql } from "gatsby"
import { Head } from "../components/Head"
import { Title } from "../components/text/Title"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Technology } from "../components/icons/Technology"
import TransitionLink from "gatsby-plugin-transition-link"
import {
  entryDefaultAnimation,
  exitDefaultAnimation,
} from "../animations/pages"

interface ProjectProps {
  data: any
}

const Portfolio: React.FunctionComponent<ProjectProps> = ({ data }) => {
  console.log(data)
  const slug = data.markdownRemark.fields.slug
  const html = data.markdownRemark.html
  const project = data.markdownRemark.frontmatter
  let subTitle = <></>

  if (project.code != null) {
    subTitle = (
      <>
        ShowCode.
        <a href={project.code} target="_blank">
          open()
        </a>
        ;
      </>
    )
  }

  if (project.url != null) {
    subTitle = (
      <>
        VisitSite.
        <a href={project.url} target="_blank">
          open()
        </a>
        ;
      </>
    )
  }

  return (
    <>
      <Helmet>
        <body className={project.title.toLowerCase()} />
        {project.background &&
          project.text &&
          project.shadow &&
          project.accent && (
            <style type="text/css">
              {`
            body {
                --background: ${project.background};
                --text: ${project.text};
                --shadow: ${project.shadow};
                --accent: ${project.accent};
            }
        `}
            </style>
          )}
        <meta name="robots" content="noindex" />
      </Helmet>
      <Head title={project.title + " | Portfolio"} url={slug} />

      <TransitionLink
        to="/portfolio"
        className="back button"
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
        &larr; Zurück
      </TransitionLink>

      <Title title={project.title} subTitle={subTitle} />

      <div className="row">
        <div className="column" md={7} sm={12} inset-follows-md={1}>
          {project.wip ? (
            <article>
              <p>
                Diese Website befindet sich aktuell noch in der Entwicklung.
              </p>
            </article>
          ) : (
            <article dangerouslySetInnerHTML={{ __html: html }} />
          )}
          <article>
            <h3>Keywords</h3>
            {project.tech.map((name: string) => (
              <Technology tech={name} />
            ))}
          </article>
          <article>
            <h3>Sprachen</h3>
            {project.languages.map((name: string) => (
              <Technology tech={name} />
            ))}
          </article>
        </div>
        <div
          className="column"
          md={6}
          inset-md={1}
          sm={10}
          offset={1}
          offset-md={0}
        >
          <div className="thumbnail portfolio">
            <GatsbyImage image={getImage(project.demo)!} alt={project.title} />
          </div>
        </div>
      </div>
    </>
  )
}

export const data = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        wip
        tech
        languages
        demo {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        url
        code
        background
        text
        accent
        shadow
      }
      html
    }
  }
`

export default Portfolio
