'use client'

import { useEffect, useRef, useState } from 'react'

interface TypingProps {
  children: string
}

function Typing({ children }: TypingProps) {
  const [position, setPosition] = useState(0)
  const currentPosition = useRef(0)

  useEffect(() => {
    const timer = setInterval(function () {
      setPosition((pos) => pos + 1)
    
      currentPosition.current += 1
      if (currentPosition.current > children.length) {
        clearInterval(timer)
      }
    }, 200)
    return () => {
      clearInterval(timer)
      setPosition(0)
      currentPosition.current = 0
    }
  }, [children])

  return children.substring(0, position)
}

export default Typing
