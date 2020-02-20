import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { ExtendibleProps, StylizableProps } from '../../../types/props'
import useTimeout from '../../../utils/hooks/useTimeout'

export enum SpinnerSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export interface SpinnerChildrenProps {
  /** Size of Spinner. */
  size: SpinnerSize
  /** Control spinning. */
  spinning: boolean
}

export interface SpinnerProps extends
  SpinnerChildrenProps,
  StylizableProps,
  ExtendibleProps<SpinnerChildrenProps> {
  /** Milliseconds before animation to start. */
  delay: number
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Spinner: FC<SpinnerProps> = props => {
  const { delay, size, spinning, children } = props
  const [delayExpired, resetDelay] = useTimeout(delay)

  useEffect(() => resetDelay(), [spinning])

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({
        size: size,
        spinning: delayExpired && spinning
      })
    }
    return children
  }

  return (
    <Container>
      {renderChildren()}
    </Container>
  )
}

export default Spinner
