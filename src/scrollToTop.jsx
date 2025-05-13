"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Use 'auto' instead of 'smooth' for immediate scrolling
    })

    // Alternative approach: use setTimeout to ensure DOM has updated
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [pathname]) // Only re-run when pathname changes

  return null // This component doesn't render anything
}

export default ScrollToTop
