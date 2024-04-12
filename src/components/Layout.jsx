import React from 'react'
import Footer from './Footer'
import Navbars from './Navbars'

function Layout({children}) {
  return (
    <div>
        <Navbars/>
        <main>
            {children}
        </main>
        <Footer/>

    </div>
  )
}

export default Layout