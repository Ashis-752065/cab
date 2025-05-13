import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const EnhancedScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Solution 1: Force layout recalculation
    document.body.style.display = "none"
    document.body.offsetHeight // Force a reflow
    document.body.style.display = ""

    // Solution 2: Multiple scroll attempts
    window.scrollTo(0, 0)

    // Solution 3: Delayed scroll with requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })

    // Solution 4: Set body position temporarily
    const originalStyle = document.body.style.position
    document.body.style.position = "fixed"
    document.body.style.top = "0"
    document.body.style.left = "0"

    // Reset after a small delay
    setTimeout(() => {
      document.body.style.position = originalStyle
      window.scrollTo(0, 0)
    }, 10)
  }, [pathname])

  return null
}

export default EnhancedScrollToTop
