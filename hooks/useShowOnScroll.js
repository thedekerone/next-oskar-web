import React, { useEffect, useState } from 'react'

export function useShowOnScroll(position) {
  //it was initialize as null to add extra functionality
  // see example of navbar style

  const [show, setShow] = useState(null)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > (!position ? window.innerHeight - 100 : position)) {
        setShow(true)
      } else if (show === true) {
        setShow(false)
      }
    })
  })
  return [show]
}
