import axios from 'axios'
import { useQuery } from 'react-query'
import { queryKeys } from '../../react-query/queryKeys'

export const useCurrenciesData = () => {
  const data = useQuery(queryKeys.currencies, async () => {
    const { data } = await axios.get('/api/currencies')
    return data
  })

  return { data }
}
