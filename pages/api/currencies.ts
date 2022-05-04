import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchAndParseCurrencies } from '../../utils/currencies/fetchAndParseCurrencies'

const currenciesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const r = await fetchAndParseCurrencies()

  res.status(200).json(r)
}

export default currenciesHandler
