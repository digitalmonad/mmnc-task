import { fetchRawCurrenciesData } from '../../api/cnbApi.utils'
import {
  extractCurrencies,
  extractMetaInfo,
  translateCurrencyKeys,
} from './parsing.utils'

import { CurrenciesApiResponseT } from '../../types'

export const fetchAndParseCurrencies = async () => {
  const response = await fetchRawCurrenciesData()
  const metaInfo = await extractMetaInfo(response)
  const currencies = await extractCurrencies(response)

  const data: CurrenciesApiResponseT = {
    info: {
      date: metaInfo[0][0],
      number: metaInfo[0][1],
    },
    currencies: currencies.map(translateCurrencyKeys),
  }

  return data
}
