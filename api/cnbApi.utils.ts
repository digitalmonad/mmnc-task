import { axiosInstance } from '.'
import { baseUrl } from './constants'

export const fetchRawCurrenciesData = async () => {
  try {
    const response = await axiosInstance.get<string>(
      `${baseUrl}/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt`
    )
    return response.data
  } catch (error) {
    throw new Error('Unable to fetch currencies data.')
  }
}
