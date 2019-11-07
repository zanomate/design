import React from 'react'
import Color from '../typography/Color'

export type ThemeColors = Record<Color, string>

export interface ThemeSettings {
  colors?: Partial<ThemeColors>
}

export const ThemeContext = React.createContext<ThemeSettings>(null)
