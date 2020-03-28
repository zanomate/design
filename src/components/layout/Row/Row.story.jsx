import React from 'react'
import styled from 'styled-components'
import { number, select } from '@storybook/addon-knobs'
import Row from './Row'
import { RowJustify } from './Row.types'
import Responsive from '../Responsive/Responsive'
import { backgroundPlaceholder, borderPlaceholder, colorPlaceholder } from '../../../../.storybook/utils/placeholders'
import Col from '../Col/Col'
import { ColVAlign } from '../Col/Col.types'

const CustomResponsive = styled(Responsive)`
  background: ${backgroundPlaceholder};
`

const CustomCol = styled(Col)`
  border: ${borderPlaceholder};
  text-align: center;
  height: 100px;
`

const CustomSpace = styled.div`
  background: ${colorPlaceholder};
  width: 100%;
  height: 50px;
`

const RowStory = () => {
  const props = {
    gutters: number('gutters', 4, { min: 0 }, 'props'),
    justify: select('justify', RowJustify, RowJustify.LEFT, 'props')
  }
  return (
    <CustomResponsive fluid>
      <Row {...props}>
        <CustomCol size={24} vAlign={ColVAlign.CENTER}>
          <CustomSpace />
        </CustomCol>
      </Row>
      <Row {...props}>
        <CustomCol size={8} vAlign={ColVAlign.CENTER}>
          <CustomSpace />
        </CustomCol>
        <CustomCol size={8} vAlign={ColVAlign.CENTER}>
          <CustomSpace />
        </CustomCol>
      </Row>
      <Row {...props}>
        <CustomCol size={6} vAlign={ColVAlign.CENTER}>
          <CustomSpace />
        </CustomCol>
        <CustomCol size={6} vAlign={ColVAlign.CENTER}>
          <CustomSpace />
        </CustomCol>
        <CustomCol size={6} vAlign={ColVAlign.CENTER}>
          <CustomSpace />
        </CustomCol>
      </Row>
    </CustomResponsive>
  )
}

export default RowStory
