export const DEFAULT_GLOBAL_FONT_SIZE = 18

export const px = (size: Size): string => `${size}px`
export const rem = (size: Size): string => `${size / DEFAULT_GLOBAL_FONT_SIZE}rem`

enum Size {
  PX_0 = 0,
  PX_1 = 1,
  PX_2 = 2,
  PX_4 = 4,
  PX_8 = 8,
  PX_16 = 16,
  PX_24 = 24,
  PX_32 = 32,
  PX_40 = 40,
  PX_48 = 48,
  PX_56 = 56,
  PX_64 = 64,
  PX_72 = 72,
  PX_80 = 80,
  PX_96 = 96,
  PX_120 = 120,
  PX_128 = 128,
  PX_144 = 144,
  PX_160 = 160,
  PX_192 = 192,
  PX_224 = 224,
  PX_256 = 256,
  PX_320 = 320,
  PX_384 = 384,
  PX_448 = 448,
  PX_512 = 512,
  PX_576 = 576,
  PX_640 = 640,
  PX_768 = 768,
  PX_960 = 960,
  PX_992 = 992,
  PX_1024 = 1024
}

export default Size
