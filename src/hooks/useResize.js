import { SIZE_CONTAINER } from '@constants'
import { useEffect, useState } from 'react'

export const useResize = () => {
  const [screenType, setScreenType] = useState('')

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth
      if (currentWidth >= 1023.9) {
        setScreenType(SIZE_CONTAINER.desktop)
      } else if (currentWidth >= 767.9) {
        setScreenType(SIZE_CONTAINER.tablet)
      } else {
        setScreenType(SIZE_CONTAINER.mobile)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return screenType
}
