/* eslint-disable @typescript-eslint/no-var-requires */
import * as PIXI from 'pixi.js'
import * as React from 'react'
import { FC, useCallback, useEffect, useRef } from 'react'
import { Container, Sprite, usePixiApp } from 'react-pixi-fiber'

export const Animation: FC = () => {
  const containerRef = useRef<PIXI.Container>()

  const app = usePixiApp()

  const containerRefFn = useCallback((container) => {
    if (!container) {
      return
    }
    containerRef.current = container
  }, [])

  const animate = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.x = (containerRef.current.x + 1) % 100
    }
  }, [])

  useEffect(() => {
    app.ticker.add(animate)
    return function cleanup() {
      app.ticker.remove(animate)
    }
  }, [animate, app.ticker])

  const texture = PIXI.Texture.from(require('./dot.png'))

  return (
    <Container ref={containerRefFn}>
      <Sprite texture={texture} />
    </Container>
  )
}
