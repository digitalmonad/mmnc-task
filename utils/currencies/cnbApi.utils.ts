import axios from 'axios'

export const fetchRawCurrenciesData = async () => {
  try {
    const response = await axios.get<string>(
      'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt'
    )
    return response.data
  } catch (error) {
    throw new Error('Unable to fetch currencies data.')
  }
}
