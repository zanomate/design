export const GLOBAL_FONT_SIZE = 18

export const pxToSize = (px: number): string => `${px / GLOBAL_FONT_SIZE}rem`

export const sizeToPx = (size: string) => {
  const rem: number = Number(size.match(/([0-9]+\.[0-9]+)rem/g)[1])
  return rem * GLOBAL_FONT_SIZE
}

export const Size = {
  PX_0: pxToSize(0),
  PX_1: pxToSize(1),
  PX_2: pxToSize(2),
  PX_4: pxToSize(4),
  PX_8: pxToSize(8),
  PX_16: pxToSize(16),
  PX_32: pxToSize(32),
  PX_64: pxToSize(64)
}

export default Size
