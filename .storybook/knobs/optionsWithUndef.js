import { select } from '@storybook/addon-knobs'

const optionsWithUndef = (name, options, value, groupId) => {
  const optionsWithUndef = {
    '---': undefined,
    ...options
  }
  return select(name, optionsWithUndef, value, groupId)
}

export default optionsWithUndef
