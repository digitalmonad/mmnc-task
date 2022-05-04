import { AxiosError } from 'axios'
import { fetchRawCurrenciesData } from './cnbApi.utils'
import { mockRawCurrencies } from '../test-utils/mocks/mockData'
import { server, rest } from '../test-utils/mocks/server'
import { baseUrl } from './constants'

describe('Fetch currencies API data', () => {
  it('Returns raw string from CNB API', async () => {
    const response = await fetchRawCurrenciesData()

    expect(response).toEqual(mockRawCurrencies)
  })
  it('Throws error if request was not successful', async () => {
    const errorMessage = 'Unable to fetch currencies data.'

    server.use(
      rest.get(
        `${baseUrl}/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt`,
        async (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: errorMessage }))
        }
      )
    )

    try {
      await fetchRawCurrenciesData()
    } catch (expectedError) {
      const message = (<AxiosError>expectedError).message
      expect(message).toBe(errorMessage)
    }

    // expect(mockedAxios.get).toBeCalledTimes(1)
  })
})
