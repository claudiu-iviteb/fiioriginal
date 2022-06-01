import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'

import '../styles/normalize.css'
import '../styles/main.css'

interface Props {
  children: React.ReactNode
  description?: string
  title: string
}

export default function Layout({ children, title, description }: Props) {
  return (
    <div className="page-container">
      <Header />
      <Seo title={title} description={description} />
      <main className="container centered">
        {children}
      </main>
      <Footer />
    </div>
  )
}
