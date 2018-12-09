import React from 'react'

import Nav from '../components/nav'
import NavBar from '../components/navBar'

import MainFooter from '../components/footer/MainFooter'
import Logo from '../components/Logo'

const Item = () => (
  <div>
    {/* <Head title='Home' /> */}
    <Nav />

    <div>
      <Logo />
      <NavBar />
      item
      <MainFooter />
    </div>
  </div>
)

export default Item
