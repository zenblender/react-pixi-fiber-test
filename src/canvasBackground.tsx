/* eslint-disable @typescript-eslint/no-var-requires */
import * as PIXI from 'pixi.js'
import * as React from 'react'
import { FC } from 'react'
import { Container, TilingSprite } from 'react-pixi-fiber'

export const CanvasBackground: FC = () => {
  const texture = PIXI.Texture.from(require('./bg-cubes-tile.png'))

  return (
    <Container>
      <TilingSprite texture={texture} width={300} height={200} />
    </Container>
  )
}
