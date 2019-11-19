import React, { useEffect, useState } from 'react'

export function useShowOnScroll(position) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > (!position ? window.innerHeight - 100 : position)) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  })
  return [show]
}
