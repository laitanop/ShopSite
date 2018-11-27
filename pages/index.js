import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import NavBar from '../components/navBar'
import SeccionBanner from '../components/seccionBanner/seccionBanner'
import Backflowers from '../components/seccionBanner2/backflowers'
import BannerPink from '../components/secctionBanner3/BannerPink'
import GroupFoto from '../components/sectionFotoGroup/GroupFoto'
import MainFooter from '../components/footer/MainFooter'
import Logo from '../components/Logo'

const Home = () => (
  <div>
    {/* <Head title='Home' /> */}
    <Nav />

    <div>

      <Logo />

      <NavBar />
      <SeccionBanner />
      <Backflowers />
      <BannerPink />
      <GroupFoto />
      <MainFooter />

    </div>

  </div>
)

export default Home
