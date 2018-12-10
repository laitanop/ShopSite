import React from 'react'

import Nav from '../components/nav'
import NavBar from '../components/navBar'

import MainFooter from '../components/footer/MainFooter'
import Logo from '../components/Logo'
import Item from '../components/catalago/Item'

const ItemDescription = () => (
  <div>
    {/* <Head title='Home' /> */}
    <Nav />

    <div>
      <Logo />
      <NavBar />
      <Item />
      <MainFooter />
    </div>
  </div>
)

export default ItemDescription
