import * as React from 'react'
import { useEffect } from 'react'
import { FC, useCallback } from 'react'
import { createStageClass, usePixiApp } from 'react-pixi-fiber'

import { CanvasBackground } from './canvasBackground'

const Stage = createStageClass()

export const ReactPixiFiberStage: FC = () => {
  const w = 300
  const h = 200

  const app = usePixiApp()

  const animate = useCallback(() => {
    console.log('animation frame')
  }, [])

  useEffect(() => {
    app.ticker.add(animate)
    return function cleanup() {
      app.ticker.remove(animate)
    }
  }, [animate, app.ticker])

  return (
    <Stage
      options={{
        autoStart: true,
        backgroundColor: 0,
        width: w,
        height: h,
        sharedLoader: false,
        powerPreference: 'low-power', // TODO: Determine if this differs from 'high-performance' in a meaningful way
        transparent: true,
        antialias: true
      }}
    >
      <CanvasBackground />
    </Stage>
  )
}
