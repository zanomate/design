import { storiesOf } from '@storybook/react'
import InputStory from './Input/Input.story'
import InputElementStory from './InputElement/InputElement.story'

const stories = storiesOf('input|.', module)
stories.add('Input', InputStory)
stories.add('InputElement', InputElementStory)
