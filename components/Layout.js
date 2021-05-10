  
import React from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        <>
      <Head>
        <title>CRM. Administracion</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <Sidebar/>
        {children}
      </div>
    </>
    )
}

export default Layout