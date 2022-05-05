import { rest } from 'msw'
import { baseUrl } from '../../api/constants'

import { mockRawCurrencies } from './mockData'

export const handlers = [
  rest.get(`/api/currencies`, (req, res, ctx) => {
    return res(ctx.text(mockRawCurrencies))
  }),
  rest.get(
    `${baseUrl}/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt`,
    (req, res, ctx) => {
      return res(ctx.text(mockRawCurrencies))
    }
  ),
]
