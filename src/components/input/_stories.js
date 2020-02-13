import { storiesOf } from '@storybook/react'
import InputStory from './Input.story'
import InputElementStory from './InputElement.story'

const stories = storiesOf('input|.', module)
stories.add('Input', InputStory)
stories.add('InputElement', InputElementStory)
