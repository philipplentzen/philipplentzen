import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

interface HeadProps {
  title: string
  url: string
  description?: string
}

export const Head: React.FunctionComponent<HeadProps> = ({
  title,
  url,
  description,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            pageTitle: title
            defaultDescription: description
            siteUrl: url
            email
            author
          }
        }
      }
    `
  )

  const { pageTitle, defaultDescription, siteUrl, email } = site.siteMetadata

  const seo = {
    title,
    description: description || defaultDescription,
    url: siteUrl + url,
    lang: "de-DE",
  }

  return (
    <Helmet title={title} titleTemplate={`%s | ${pageTitle}`}>
      <html lang={seo.lang} />
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={`${seo.title} | ${pageTitle}`} />
      <meta property="og:sitename" content={`${seo.title} | ${pageTitle}`} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${seo.title} | ${pageTitle}`} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="prefetch" href="../images/transition.png"/>
      <script type="application/ld+json">
        {`
          [{
            "@context": "https://schema.org",
            "@graph": [{
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "${siteUrl}/#Mainmenu",
                "name": "Startseite",
                "url": "${siteUrl}"
            },
            {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "${siteUrl}/#Mainmenu",
                "name": "Über mich",
                "url": "${siteUrl}/about"
            },
            {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "${siteUrl}/#Mainmenu",
                "name": "Portfolio",
                "url": "${siteUrl}/portfolio"
            },
            {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "${siteUrl}/#Mainmenu",
                "name": "Lebenslauf",
                "url": "${siteUrl}/resume"
            },
            {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "@id": "${siteUrl}/#Mainmenu",
                "name": "Kontakt",
                "url": "${siteUrl}/contact"
            }]
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "${siteUrl}#Person",
            "name": "${pageTitle}",
            "url": "${siteUrl}",
            "email": "${email}",
            "image": "https://avatars.githubusercontent.com/u/29258187?v=4",
            "gender": "male"
          }]
        `}
      </script>
    </Helmet>
  )
}
