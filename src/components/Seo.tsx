import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  description?: string,
  title: string,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
        author
        siteUrl
        titleTemplate
      }
    }
  }
`

function SEO({ title, description }: Props) {
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    author,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}`,
  }
  return (
    <Helmet title={seo.title} titleTemplate={title !== 'Fii original!' ? titleTemplate : title} htmlAttributes={{ lang: 'ro' }}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.title && <meta name="twitter:creator" content={author} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO
