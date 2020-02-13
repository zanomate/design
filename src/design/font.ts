export enum Font {
  BOLD = 'BOLD',
  MEDIUM = 'MEDIUM',
  BOOK = 'BOOK',
  THIN = 'THIN'
}

export interface Fonts {
  [Font.BOLD]: string
  [Font.MEDIUM]: string
  [Font.BOOK]: string
  [Font.THIN]: string
}

export const defaultFonts: Fonts = {
  [Font.BOLD]: 'bold',
  [Font.MEDIUM]: 'medium',
  [Font.BOOK]: 'book',
  [Font.THIN]: 'thin'
}
