import { motion, useAnimation } from 'framer-motion'
import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import Color from '../../design/color'

const ENTER_DURATION = 0.5
const LOOP_DURATION = 1.5
const EXIT_DURATION = 0.5

export interface WaveConfig {
  width: number
  height: number
  bars: number
  barWidthWeight: number
  barSpaceWeight: number
  barIdleHeight: number
}

export interface WaveColorSchema {
  color: Color
}

export interface WaveProps {
  animate: boolean
  onEntered?: () => void
  onExited?: () => void
  config?: WaveConfig
  colorSchema: WaveColorSchema
}

const DefaultWaveConfig: WaveConfig = {
  width: 250,
  height: 50,
  bars: 5,
  barWidthWeight: 4,
  barSpaceWeight: 1,
  barIdleHeight: 5
}

interface ContainerProps {
  width: number
  height: number
}

const Container = styled.div<ContainerProps>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`

interface BarProps {
  width: number
  height: number
}

const Bar = styled(motion.div)<BarProps>`
  position: absolute;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background-color: ${p => p.theme.colors[Color.PRIMARY_DARK]};
`

const Wave: FC<WaveProps> = props => {
  const { animate, onEntered, onExited, config = DefaultWaveConfig } = props
  const anim = useAnimation()

  const start = async () => {
    await anim.set('hidden')
    await anim.start('enter')
    if (onEntered) {
      onEntered()
    }
    await anim.start('loop')
  }

  const stop = async () => {
    await anim.start('exit')
    await anim.start('hiddenExit')
    if (onExited) {
      onExited()
    }
  }

  useEffect(() => {
    if (animate) {
      start()
    } else {
      stop()
    }
  }, [animate])

  const { width, height, bars, barWidthWeight, barSpaceWeight, barIdleHeight } = config
  const units = bars * barWidthWeight + (bars - 1) * barSpaceWeight
  const unitPx = width / units
  const barWidthPx = barWidthWeight * unitPx
  const barSpacePx = barSpaceWeight * unitPx

  const enterUnitSecs = ENTER_DURATION / units

  const variants = {
    hidden: (idx: number) => ({
      x: -((bars - idx) * barWidthPx),
      height: barIdleHeight
    }),
    enter: (idx: number) => ({
      x: idx * (barWidthPx + barSpacePx),
      transition: {
        duration: ENTER_DURATION + enterUnitSecs * idx * 3,
        ease: 'easeOut'
      }
    }),
    loop: (idx: number) => ({
      height: [barIdleHeight, height, barIdleHeight],
      transition: {
        delay: idx * (LOOP_DURATION / (bars + 5)),
        duration: LOOP_DURATION / 2,
        repeatDelay: LOOP_DURATION / 2,
        loop: Infinity,
        ease: 'linear'
      }
    }),
    exit: (idx: number) => ({
      height: barIdleHeight,
      transition: {
        duration: EXIT_DURATION + enterUnitSecs * idx * 3,
        ease: 'linear'
      }
    }),
    hiddenExit: (idx: number) => ({
      x: width + ((bars - idx) * barWidthPx),
      transition: {
        duration: EXIT_DURATION + enterUnitSecs * idx * 3,
        ease: 'linear'
      }
    })
  }

  const renderBar = (value: number, idx: number) => (
    <Bar
      key={idx}
      width={barWidthPx}
      height={barIdleHeight}
      initial="hidden"
      animate={anim}
      variants={variants}
      custom={idx}
    />
  )

  return (
    <Container width={width} height={height}>
      {Array(bars).fill(0).map(renderBar)}
    </Container>
  )
}

export default Wave
