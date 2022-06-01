import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Fii original!">
      <div className="temp-homepage">
        <h3>No, asta-i piatra de temelie a viitorului site Fiioriginal.ro</h3>
        <StaticImage src="../images/brick.png" alt="a brick" width={300} objectFit="contain" />
      </div>
    </Layout>
  )
}
