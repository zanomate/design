import React from 'react'
import { motion } from 'framer-motion'
import Spinner, { SpinnerProps } from 'components/feedback/spinner/Spinner'
import { Comp } from 'types/Comp'

export type LinearSpinnerProps = Omit<SpinnerProps, 'children'>

const LinearSpinner: Comp<LinearSpinnerProps> = props => {
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
