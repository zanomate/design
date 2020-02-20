export enum VAlign {
  TOP = 'top',
  CENTER = 'center',
  BOTTOM = 'bottom'
}

export const mapVAlignToJustifyContent = (vAlign: VAlign): string => {
  switch (vAlign) {
    case VAlign.TOP:
      return 'flex-start'
    case VAlign.CENTER:
      return 'center'
    case VAlign.BOTTOM:
      return 'flex-end'
    default:
      return 'center'
  }
}

export const mapVAlignToAlignItems = (vAlign: VAlign): string => {
  switch (vAlign) {
    case VAlign.TOP:
      return 'top'
    case VAlign.CENTER:
      return 'center'
    case VAlign.BOTTOM:
      return 'bottom'
    default:
      return 'center'
  }
}
