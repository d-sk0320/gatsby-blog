import React from 'react'
import "../styles/layout.css"
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )

}

export default Layout
