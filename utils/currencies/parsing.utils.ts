import { parse as csvParse, Options as parserOptions } from 'csv-parse'
import { CurrencyOriginalT, CurrencyT } from '../../types'

const DEFAULT_OPTIONS: parserOptions = { skip_empty_lines: true }

export const parseCurrencies = async <T>(
  rawCsv: string,
  options = DEFAULT_OPTIONS
) => {
  return new Promise<T>((resolve, reject) => {
    csvParse(rawCsv, options, (error, data) => {
      error ? reject(error.message) : resolve(data)
    })
  })
}

export const translateCurrencyKeys = (obj: CurrencyOriginalT): CurrencyT => ({
  rate: obj['kurz'],
  code: obj['kód'],
  amount: obj['množství'],
  name: obj['měna'],
  country: obj['země'],
})

export const extractCurrencies = (csvString: string) =>
  parseCurrencies<CurrencyOriginalT[]>(csvString, {
    columns: true,
    group_columns_by_name: true,
    delimiter: '|',
    fromLine: 2,
  })

export const extractMetaInfo = async (csvString: string) => {
  const dateAndListNumber = await parseCurrencies<string[][]>(csvString, {
    delimiter: ' ',
    toLine: 1,
  })

  return dateAndListNumber
}
