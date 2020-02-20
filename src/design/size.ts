export const DEFAULT_GLOBAL_FONT_SIZE = 18

export const px = (size: number): string => `${size}px`

export const rem = (size: number): string => `${size / DEFAULT_GLOBAL_FONT_SIZE}rem`

export type Size = number | string

const size = (value?: Size): string | undefined => {
  if (value === undefined || value === null) {
    return undefined
  }
  if (typeof value === 'number') {
    return rem(value)
  }
  return value
}

export default size
