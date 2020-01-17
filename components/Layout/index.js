import React from 'react'
import { Navbar } from '../Navbar'
import { GlobalStyles } from '../../GlobalStyles'

import { useWeglot } from '../../hooks/useWeglot'

export function Layout({ background, color, children, position, fixed }) {
  const [initial] = useWeglot()

  initial !== null &&
    !initial.initialized &&
    initial.initialize({
      api_key: 'wg_91e50a16f59b2922c685b30df90da5677'
    })

  return (
    <div>
      <GlobalStyles />
      <Navbar
        background={background}
        color={color}
        fixed={fixed}
        position={position}
      />
      {children}
    </div>
  )
}
