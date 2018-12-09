import React from 'react'

import Nav from '../components/nav'
import NavBar from '../components/navBar'

import MainFooter from '../components/footer/MainFooter'
import Logo from '../components/Logo'
import Catalago from '../components/catalago/Catalago'

const Catalog = () => (
  <div>
    {/* <Head title='Home' /> */}
    <Nav />

    <div>
      <Logo />
      <NavBar />
      <Catalago />
      <MainFooter />
    </div>
  </div>
)

export default Catalog
