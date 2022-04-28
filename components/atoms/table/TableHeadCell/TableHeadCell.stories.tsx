import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TableHeadCell } from './TableHeadCell.component'

const Template: ComponentStory<typeof TableHeadCell> = (args) => (
  <TableHeadCell {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Data',
}

export default {
  title: 'Components/Atoms/table/TableHeadCell',
  component: Default,
} as ComponentMeta<typeof TableHeadCell>
