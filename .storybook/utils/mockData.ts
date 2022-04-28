import { CurrencyT } from '../../types'

export const mockCurrencies: CurrencyT[] = [
  {
    name: 'doge coin',
    rate: '38363',
    code: 'DGC',
    country: 'USA',
    amount: '29373',
  },
  {
    name: 'bitcoin',
    rate: '936222',
    code: 'BTC',
    country: 'USA',
    amount: '3938',
  },
  {
    name: 'ethereum',
    rate: '23863',
    code: 'ETH',
    country: 'russia',
    amount: '20383',
  },
  {
    name: 'litecoin',
    rate: '96393',
    code: 'LTC',
    country: 'Prussia',
    amount: '30383',
  },
]

export const mockColumns = [
  {
    Header: 'Rate',
    accessor: 'rate',
  },
  {
    Header: 'Code',
    accessor: 'code',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
]
