import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'  // Importamos el componente Footer

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Gitar LA {pagina}</title>
      </Head>
      <Header/>
      {children}

      <Footer/>
    </div>
  )
}

export default Layout