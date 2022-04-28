import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TableBodyRow, TableBodyRowSkeleton } from './TableBodyRow.component'
import { useMockReactTableData } from '../../../../.storybook/utils/reactTable'
import {
  mockColumns,
  mockCurrencies,
} from '../../../../.storybook/utils/mockData'

const Wrapper = ({ isLoading, columns, currencies }: any) => {
  const { rows, prepareRow, allColumns, getTableBodyProps } =
    useMockReactTableData({
      columns,
      currencies,
    })

  return (
    <tbody {...getTableBodyProps()}>
      {isLoading
        ? Array(50)
            .fill({})
            .map((_row, index) => (
              <TableBodyRowSkeleton
                {...{ isLoading, allColumns }}
                fullWidth={index % 2 === 0}
              />
            ))
        : rows.map((row) => (
            <>
              {prepareRow(row)}
              <TableBodyRow row={row} />
            </>
          ))}
    </tbody>
  )
}

const Template: ComponentStory<any> = (args) => <Wrapper {...args} />

export const Default = Template.bind({})

export const Skeleton = Template.bind({})

Default.args = {
  columns: mockColumns,
  currencies: mockCurrencies,
}

Skeleton.args = {
  columns: mockColumns,
  currencies: mockCurrencies,
  isLoading: true,
}

export default {
  title: 'Components/Molecules/table/TableBodyRow',
  component: Default,
} as ComponentMeta<typeof TableBodyRow>
