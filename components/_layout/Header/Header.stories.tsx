import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header.component'

const Template: ComponentStory<typeof Header> = () => <Header />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Components/Molecules/Header',
  component: Default,
} as ComponentMeta<typeof Header>
