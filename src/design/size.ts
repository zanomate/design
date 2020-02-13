export const DEFAULT_GLOBAL_FONT_SIZE = 18

export const px = (size?: number): string | undefined => {
  if (typeof size === 'number') {
    return `${size}px`
  }
  return undefined
}

export const rem = (size?: number): string | undefined => {
  if (typeof size === 'number') {
    return `${size / DEFAULT_GLOBAL_FONT_SIZE}rem`
  }
  return undefined
}
