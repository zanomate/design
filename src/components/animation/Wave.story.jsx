import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import Wave from './Wave'
import on from '../../../.storybook/utils/on'

const stories = storiesOf('animation|.', module)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const WaveContainer = styled.div`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`

const Controls = styled.div`
  margin-top: 50px;
`

stories.add('Wave', () => {
  const container = useRef(null)
  const [isAnimated, setIsAnimated] = useState(true)

  const props = {
    onEntered: on('entered'),
    onExited: on('exited'),
    container: container
  }

  const config = {
    width: number('width', 200, { min: 0, step: 5 }, 'config'),
    height: number('height', 50, { min: 0, step: 5 }, 'config'),
    bars: number('bars', 5, { min: 3 }, 'config'),
    barWidthWeight: number('barWidthWeight', 4, { min: 5 }, 'config'),
    barSpaceWeight: number('barSpaceWeight', 1, { min: 5 }, 'config'),
    barIdleHeight: number('barIdleHeight', 5, { min: 5, step: 5 }, 'config')
  }

  return (
    <Container>
      <WaveContainer width={config.width} height={config.height}>
        <Wave {...props} animate={isAnimated} config={config} />
      </WaveContainer>
      <Controls>
        <button onClick={() => setIsAnimated(true)}>START</button>
        <button onClick={() => setIsAnimated(false)}>STOP</button>
      </Controls>
    </Container>
  )
})
