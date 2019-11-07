import { ColorSet } from 'typography/ColorSet'

export const INDEPENDENCE = '#465775'
export const CHARCOAL = '#3A4860'
export const AQUAMARINE = '#56E39F'
export const OCEAN = '#47BA83'

export const CARMINE = '#EF6F6C'
export const INDIAN = '#C45B59'
export const CRIMSON = '#F46197'

export const GREY_DARK_2 = '#333333'
export const GREY_DARK = '#4F4F4F'
export const GREY = '#828282'
export const GREY_LIGHT = '#BDBDBD'
export const GREY_LIGHT_2 = '#E0E0E0'
export const GREY_LIGHT_3 = '#F2F2F2'

export const defaultColors: ColorSet = {
  // Brand
  primary: INDEPENDENCE,
  primaryVariant: CHARCOAL,
  secondary: AQUAMARINE,
  secondaryVariant: OCEAN,
  // Accent
  accent: CARMINE,
  accentVariant: INDIAN,
  alert: CRIMSON,
  // Greyscale
  darker: GREY_DARK_2,
  dark: GREY_DARK,
  shadow: GREY,
  neutral: GREY_LIGHT,
  light: GREY_LIGHT_2,
  lighter: GREY_LIGHT_3
}
