import React from 'react'
import { storiesOf } from '@storybook/react'
import Centered from './Centered'
import Justified from './Justified'
import Section from './Section'
import {
  borderPlaceholder,
  otherParagraphPlaceholder,
  paragraphPlaceholder
} from '../../../../.storybook/utils/placeholders'
import dimension from '../../../../.storybook/knobs/dimension'

const stories = storiesOf('typography|Section', module)

stories.add('Section', () => {
  const props = {
    side: dimension('side', undefined, 'props', true),
    top: dimension('top', undefined, 'props', true),
    left: dimension('left', undefined, 'props', true),
    right: dimension('right', undefined, 'props', true),
    bottom: dimension('bottom', undefined, 'props', true)
  }
  return (
    <Section {...props} style={{ border: borderPlaceholder }}>
      {paragraphPlaceholder}
      <br />
      {otherParagraphPlaceholder}
    </Section>
  )
})

stories.add('Centered', () => {
  const props = {
    side: dimension('side', undefined, 'props', true),
    top: dimension('top', undefined, 'props', true),
    left: dimension('left', undefined, 'props', true),
    right: dimension('right', undefined, 'props', true),
    bottom: dimension('bottom', undefined, 'props', true)
  }
  return (
    <Centered {...props}>
      {paragraphPlaceholder}
      <br />
      {otherParagraphPlaceholder}
    </Centered>
  )
})

stories.add('Justified', () => {
  const props = {
    side: dimension('side', undefined, 'props', true),
    top: dimension('top', undefined, 'props', true),
    left: dimension('left', undefined, 'props', true),
    right: dimension('right', undefined, 'props', true),
    bottom: dimension('bottom', undefined, 'props', true)
  }
  return (
    <Justified {...props}>
      {paragraphPlaceholder}
      <br />
      {otherParagraphPlaceholder}
    </Justified>
  )
})
