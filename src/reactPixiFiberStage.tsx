import * as React from 'react'
import { FC } from 'react'
import { createStageClass } from 'react-pixi-fiber'

import { AnimationWrapper } from './animationWrapper'
import { CanvasBackground } from './canvasBackground'

const Stage = createStageClass()

export const ReactPixiFiberStage: FC = () => {
  const w = 300
  const h = 200

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
      <AnimationWrapper />
    </Stage>
  )
}
