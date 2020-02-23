import { select } from '@storybook/addon-knobs'

const dimension = (name, value, groupId, includeUndefined = false) => {
  const optionsWithUndef = {
    ...(includeUndefined && { '---': undefined }),
    '0': 0,
    '1': 1,
    '2': 2,
    '4': 4,
    '8': 8,
    '16': 16,
    '32': 32,
    '64': 64,
    '128': 128,
    '256': 256
  }

  return select(name, optionsWithUndef, value, groupId)
}

export default dimension
