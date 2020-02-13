import { motion } from 'framer-motion'
import React, { FC } from 'react'
import Spinner, { SpinnerProps } from './Spinner'

export type LinearSpinnerProps = Omit<SpinnerProps, 'children'>

const LinearSpinner: FC<LinearSpinnerProps> = props => {
  return (
    <Spinner {...props}>
      {({ size, spinning }) => (
        <motion.div
          animate={{ scale: 2 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </Spinner>
  )
}

export default LinearSpinner
