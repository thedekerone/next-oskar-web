import React, { useState, useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Layout } from '../components/Layout'
import { useWeglot } from '../hooks/useWeglot'
import Location from '../components/Location'
function Index() {
  const [initial] = useWeglot()
  initial !== null &&
    !initial.initialized &&
    initial.initialize({
      api_key: 'wg_91e50a16f59b2922c685b30df90da5677'
    })

  return (
    <Layout>
      <Hero />
      <Products />
      <About />
      <Contact />
      <Location></Location>
    </Layout>
  )
}
export default Index
