export enum Breakpoint {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export interface BreakpointValues {
  base: number
  [Breakpoint.XS]: number
  [Breakpoint.SM]: number
  [Breakpoint.MD]: number
  [Breakpoint.LG]: number
  [Breakpoint.XL]: number
  [Breakpoint.XXL]: number
}

export const defaultWidths: Omit<BreakpointValues, 'base' | 'xs'> = {
  [Breakpoint.SM]: 490,
  [Breakpoint.MD]: 670,
  [Breakpoint.LG]: 910,
  [Breakpoint.XL]: 1100,
  [Breakpoint.XXL]: 1100
}

export const breakpointsLimits = {
  [Breakpoint.XS]: { min: undefined, max: 479 },
  [Breakpoint.SM]: { min: 480, max: 767 },
  [Breakpoint.MD]: { min: 768, max: 991 },
  [Breakpoint.LG]: { min: 992, max: 991 },
  [Breakpoint.XL]: { min: 1200, max: 991 },
  [Breakpoint.XXL]: { min: 1600, max: undefined }
}

export const minWidth = (breakpoint: Breakpoint) => breakpointsLimits[breakpoint].min

export const maxWidth = (breakpoint: Breakpoint) => breakpointsLimits[breakpoint].max
