import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TableBodyCell } from './TableBodyCell.component'

const Template: ComponentStory<typeof TableBodyCell> = (args) => (
  <TableBodyCell {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Data',
}

export default {
  title: 'Components/Atoms/table/TableBodyCell',
  component: Default,
} as ComponentMeta<typeof TableBodyCell>
