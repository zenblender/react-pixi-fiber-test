import * as React from 'react'
import { FC, useEffect, useState } from 'react'

import { Animation } from './animation'

export const AnimationWrapper: FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount((currCount) => currCount + 1)
    }, 0)
  }, [])

  if (count % 2 === 0) {
    return <Animation />
  }

  return null
}
