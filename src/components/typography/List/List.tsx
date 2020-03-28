import React, { createContext, FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ListProps } from './List.props'

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const List: FC<ListProps> = props => {
  const { ordered } = props
  return (
    <Container>
      {}
    </Container>
  )
}

export default List
