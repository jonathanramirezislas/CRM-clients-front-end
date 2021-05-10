import React from 'react'
import Head from 'next/head'

const Layout = () => {
    return (
        <>
      <Head>
        <title>CRM. Administracion</title>
      </Head>
      <h1>desde Layout</h1>
      <div className="bg-gray-800 min-h-screen">
        <Layout>
          <h2>Desde index</h2>
        </Layout>
      </div>
    </>
    )
}

export default Layout
