import { storiesOf } from '@storybook/react'
import ResponsiveStory from './Responsive/Responsive.story'
import ColStory from './Col/Col.story'
import RowStory from './Row/Row.story'

const stories = storiesOf('layout|.', module)

stories.add('Responsive', ResponsiveStory)
stories.add('Row', RowStory)
stories.add('Col', ColStory)
