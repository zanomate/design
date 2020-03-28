import React from 'react'
import styled from 'styled-components'
import { number } from '@storybook/addon-knobs'
import Col from './Col'
import { ColVAlign } from './Col.types'
import Responsive from '../Responsive/Responsive'
import Row from '../Row/Row'
import Space from '../Space/Space'
import colSize from '../../../../.storybook/knobs/colSize'
import optionsWithUndef from '../../../../.storybook/knobs/optionsWithUndef'
import { backgroundPlaceholder, borderPlaceholder, colorPlaceholder } from '../../../../.storybook/utils/placeholders'

const CustomResponsive = styled(Responsive)`
  background: ${backgroundPlaceholder};
`

const CustomRow = styled(Row)`
  height: 200px;
`

const CustomCol = styled(Col)`
  border: ${borderPlaceholder};
`

const CustomSpace = styled(Space)`
  background: ${colorPlaceholder};
  margin-left: auto;
  margin-right: auto;
`

const ColStory = () => {
  const props = {
    size: colSize('size', 'props'),
    xs: colSize('xs', 'props'),
    sm: colSize('sm', 'props'),
    md: colSize('md', 'props'),
    lg: colSize('lg', 'props'),
    xl: colSize('xl', 'props'),
    xxl: colSize('xxl', 'props'),
    gutters: number('gutters', 4, { min: 0 }, 'props'),
    vAlign: optionsWithUndef('vAlign', ColVAlign, undefined, 'props')
  }
  return (
    <CustomResponsive fluid>
      <CustomRow>
        <CustomCol {...props}>
          <CustomSpace width={50} height={50} />
          <CustomSpace width={50} height={50} />
        </CustomCol>
      </CustomRow>
    </CustomResponsive>
  )
}

export default ColStory
