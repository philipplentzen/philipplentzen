import React from "react"
import { Head } from "../components/Head"
import { Helmet } from "react-helmet"
import { Title } from "../components/text/Title"
import "@brainhubeu/react-carousel/lib/style.css"
import { graphql, useStaticQuery } from "gatsby"
import { Poster } from "../components/cards/Poster"
import { getImage } from "gatsby-plugin-image"

interface PortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<PortfolioPageProps> = () => {
  const data = useStaticQuery(
    graphql`
      {
        portfolio: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/data/portfolio/" } }
          sort: { fields: frontmatter___wip, order: ASC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                wip
                tech
                cover {
                  childImageSharp {
                    gatsbyImageData(
                      width: 404
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const projects = data.portfolio.edges

  return (
    <>
      <Helmet bodyAttributes={{ class: "portfolio light" }} />
      <Head title="Portfolio" url="/portfolio" />

      <Title title="Portfolio" subTitle="" />
      <div className="grid" sm={6} md={4}>
        {projects &&
          projects.map(({ node }: any) => {
            const { frontmatter, fields } = node
            const { title, wip, tech } = frontmatter
            const cover = getImage(frontmatter.cover)
            const { slug } = fields

            return (
              <Poster
                title={title}
                cover={cover!}
                slug={slug}
                wip={wip}
                tech={tech}
              />
            )
          })}
      </div>
    </>
  )
}

export default PortfolioPage
