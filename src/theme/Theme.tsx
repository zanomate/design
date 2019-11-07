import React, { FC } from 'react'
import { ThemeContext, ThemeSettings } from './context'
import { defaultColors } from './default/colors'

const defaultTheme: ThemeSettings = { colors: defaultColors }

const Theme: FC<ThemeSettings> = ({ children, ...otherProps }) => (
  <ThemeContext.Provider value={{ ...defaultTheme, ...otherProps }}>
    {children}
  </ThemeContext.Provider>
)

export default Theme
