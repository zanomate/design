import { storiesOf } from '@storybook/react'
import ResponsiveStory from './Responsive/Responsive.story'
import ColStory from './Col/Col.story'

const stories = storiesOf('layout|.', module)

stories.add('Col', ColStory)
stories.add('Responsive', ResponsiveStory)
