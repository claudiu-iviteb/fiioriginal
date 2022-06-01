import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    defaultTitle: 'Fii Original',
    defaultDescription: 'Fii Original.ro - Aici va fi o descriere dementiala. Pana atunci...asta',
    author: 'Claudiu Ionita',
    siteUrl: 'https://fiioriginal.ro',
    titleTemplate: '%s · Fii original!',
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-image', 'gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  }, 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  }],
}

export default config
