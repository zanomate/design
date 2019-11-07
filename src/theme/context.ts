import React from 'react'
import { ColorSet } from 'typography/ColorSet'

export interface ThemeSettings {
  colors?: Partial<ColorSet>
}

export const ThemeContext = React.createContext<ThemeSettings>(null)
