import axios, { AxiosError } from 'axios'
import { fetchRawCurrenciesData } from './cnbApi.utils'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Fetch currencies API data', () => {
  afterEach(() => {
    mockedAxios.get.mockReset()
  })

  it('Returns raw string from CNB API', async () => {
    const mockApiResponse = { data: 'raw,csv,string' }

    mockedAxios.get.mockResolvedValueOnce(mockApiResponse)

    const response = await fetchRawCurrenciesData()

    expect(mockedAxios.get).toBeCalledTimes(1)
    expect(response).toEqual(mockApiResponse.data)
  })
  it('Throws error if request was not successful', async () => {
    const mockedError = new Error('Unable to fetch currencies data.')

    mockedAxios.get.mockRejectedValue(mockedError)

    try {
      await fetchRawCurrenciesData()
    } catch (expectedError) {
      const message = (<AxiosError>expectedError).message
      expect(message).toBe(mockedError.message)
    }

    expect(mockedAxios.get).toBeCalledTimes(1)
  })
})
