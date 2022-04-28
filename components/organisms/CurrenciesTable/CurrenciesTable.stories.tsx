import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CurrencyT } from '../../../types'
import { CurrenciesTable } from './CurrenciesTable.component'
import { mockCurrencies } from '../../../.storybook/utils/mockData'

const Template: ComponentStory<typeof CurrenciesTable> = (args) => (
  <CurrenciesTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
  currencies: mockCurrencies,
  isLoading: true,
  error: false,
} as { currencies: CurrencyT[]; isLoading: boolean }

export default {
  title: 'Components/Organisms/CurrenciesTable',
  component: Default,
} as ComponentMeta<typeof CurrenciesTable>
