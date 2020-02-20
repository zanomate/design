enum Color {
  BASE = 'base',
  PRIMARY_DARK = 'primary-dark',
  PRIMARY_SHADOW = 'primary-shadow',
  PRIMARY_STANDARD = 'primary-standard',
  PRIMARY_LIGHT = 'primary-light',
  ALERT = 'alert',
  CAUTION = 'caution',
  ACCENT = 'accent',
  HIGHLIGHT = 'highlight',
  DETAIL = 'pale',
  GREY_ULTRA_DARK = 'grey-ultra-dark',
  GREY_DARK = 'grey-dark',
  GREY_SHADOW = 'grey-shadow',
  GREY_NEUTRAL = 'grey-neutral',
  GREY_LIGHT = 'grey-light',
  GREY_ULTRA_LIGHT = 'grey-ultra-light',
  TRANSPARENT = 'transparent'
}

export default Color

export interface Palette {
  [Color.BASE]: string
  [Color.PRIMARY_DARK]: string
  [Color.PRIMARY_SHADOW]: string
  [Color.PRIMARY_STANDARD]: string
  [Color.PRIMARY_LIGHT]: string
  [Color.ALERT]: string
  [Color.CAUTION]: string
  [Color.ACCENT]: string
  [Color.HIGHLIGHT]: string
  [Color.DETAIL]: string
  [Color.GREY_ULTRA_DARK]: string
  [Color.GREY_DARK]: string
  [Color.GREY_SHADOW]: string
  [Color.GREY_NEUTRAL]: string
  [Color.GREY_LIGHT]: string
  [Color.GREY_ULTRA_LIGHT]: string
}

export const defaultColors: Palette = {
  [Color.BASE]: '#ffffff',
  [Color.PRIMARY_DARK]: '#1D4B48',
  [Color.PRIMARY_SHADOW]: '#2B706B',
  [Color.PRIMARY_STANDARD]: '#4ECDC4',
  [Color.PRIMARY_LIGHT]: '#7EDAD4',
  [Color.ALERT]: '#D81E5B',
  [Color.CAUTION]: '#FF6B6B',
  [Color.ACCENT]: '#F19953',
  [Color.HIGHLIGHT]: '#C3D350',
  [Color.DETAIL]: '#E6F14A',
  [Color.GREY_ULTRA_DARK]: '#333333',
  [Color.GREY_DARK]: '#4f4f4f',
  [Color.GREY_SHADOW]: '#828282',
  [Color.GREY_NEUTRAL]: '#bdbdbd',
  [Color.GREY_LIGHT]: '#e0e0e0',
  [Color.GREY_ULTRA_LIGHT]: '#f2f2f2'
}

export type Colors = Palette & {
  [Color.TRANSPARENT]: string
}
