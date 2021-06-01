import { css } from '@emotion/react'
import * as React from 'react'
import { FC, useCallback } from 'react'
import { createStageClass } from 'react-pixi-fiber'

import { CanvasBackground } from './canvasBackground'

const Stage = createStageClass()

export const ReactPixiFiberStage: FC = () => {
  const w = 300
  const h = 200

  const stageRef = useCallback((stage) => {
    // do stuff
  }, [])

  return (
    <Stage
      ref={stageRef}
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
      css={css`
        position: absolute;
        left: 0;
        top: 0;
      `}
    >
      <CanvasBackground />
    </Stage>
  )
}
