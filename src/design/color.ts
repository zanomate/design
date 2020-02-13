enum Color {
  PRIMARY_DARK = 'PRIMARY_DARK',
  PRIMARY_SHADOW = 'PRIMARY_SHADOW',
  PRIMARY_STANDARD = 'PRIMARY_STANDARD',
  PRIMARY_LIGHT = 'PRIMARY_LIGHT',
  SECONDARY_ALERT = 'SECONDARY_ALERT',
  SECONDARY_CAUTION = 'SECONDARY_CAUTION',
  SECONDARY_ACCENT = 'SECONDARY_ACCENT',
  SECONDARY_HIGHLIGHT = 'SECONDARY_HIGHLIGHT',
  SECONDARY_PALE = 'SECONDARY_PALE',
  GREY_SUPER_DARK = 'GREY_SUPER_DARK',
  GREY_DARK = 'GREY_DARK',
  GREY_SHADOW = 'GREY_SHADOW',
  GREY_NEUTRAL = 'GREY_NEUTRAL',
  GREY_LIGHT = 'GREY_LIGHT',
  GREY_SUPER_LIGHT = 'GREY_SUPER_LIGHT',
  WHITE = 'WHITE',
  TRANSPARENT = 'TRANSPARENT'
}

export default Color

export interface Colors {
  [Color.PRIMARY_DARK]: string
  [Color.PRIMARY_SHADOW]: string
  [Color.PRIMARY_STANDARD]: string
  [Color.PRIMARY_LIGHT]: string
  [Color.SECONDARY_ALERT]: string
  [Color.SECONDARY_CAUTION]: string
  [Color.SECONDARY_ACCENT]: string
  [Color.SECONDARY_HIGHLIGHT]: string
  [Color.SECONDARY_PALE]: string
  [Color.GREY_SUPER_DARK]: string
  [Color.GREY_DARK]: string
  [Color.GREY_SHADOW]: string
  [Color.GREY_NEUTRAL]: string
  [Color.GREY_LIGHT]: string
  [Color.GREY_SUPER_LIGHT]: string
}

export interface BasicColors {
  [Color.TRANSPARENT]: string
  [Color.WHITE]: string
}

export const defaultColors: Colors = {
  [Color.PRIMARY_DARK]: '#353c4f',
  [Color.PRIMARY_SHADOW]: '#637bbd',
  [Color.PRIMARY_STANDARD]: '#8095cf',
  [Color.PRIMARY_LIGHT]: '#cad0e0',
  [Color.SECONDARY_ALERT]: '#e52822',
  [Color.SECONDARY_CAUTION]: '#ff5c5a',
  [Color.SECONDARY_ACCENT]: '#f68545',
  [Color.SECONDARY_HIGHLIGHT]: '#f2c554',
  [Color.SECONDARY_PALE]: '#e6d08b',
  [Color.GREY_SUPER_DARK]: '#333333',
  [Color.GREY_DARK]: '#4f4f4f',
  [Color.GREY_SHADOW]: '#828282',
  [Color.GREY_NEUTRAL]: '#bdbdbd',
  [Color.GREY_LIGHT]: '#e0e0e0',
  [Color.GREY_SUPER_LIGHT]: '#f2f2f2'
}

export const basicColors: BasicColors = {
  [Color.WHITE]: '#ffffff',
  [Color.TRANSPARENT]: 'transparent'
}
