import {
  parseCurrencies,
  extractMetaInfo,
  translateCurrencyKeys,
} from './parsing.utils'

test('', () => {
  expect(2).toBe(2)
})

describe('CSV Parsing', () => {
  const csvString =
    `31.03.2022 #64\nzemě|měna|množství|kód|kurz\nAustrálie|dolar|1|AUD|16,443`.trim()

  it('skips line 1 and output object for each currency', () => {
    parseCurrencies(csvString, {
      columns: true,
      group_columns_by_name: true,
      delimiter: '|',
      fromLine: 2,
    }).then((data) => {
      expect(data).toEqual([
        {
          kurz: '16,443',
          kód: 'AUD',
          množství: '1',
          měna: 'dolar',
          země: 'Austrálie',
        },
      ])
    })
  })

  it('parses and output date on line 1', () => {
    parseCurrencies(csvString, {
      delimiter: ' ',
      toLine: 1,
    }).then((data) => {
      expect(data).toEqual([['31.03.2022', '#64']])
    })
  })
})

describe('Extracting data', () => {
  const csvString =
    `01.01.2000 #1\nzemě|měna|množství|kód|kurz\nAustrálie|dolar|1|AUD|16,443`.trim()

  it('extracts date', () => {
    extractMetaInfo(csvString).then((data) => {
      expect(data).toEqual([['01.01.2000', '#1']])
    })
  })
})

describe('Currency object keys translation', () => {
  const originalKeysObj = {
    kurz: '16,443',
    kód: 'AUD',
    množství: '1',
    měna: 'dolar',
    země: 'Austrálie',
  }

  it('Translated object has proper keys', () => {
    const result = translateCurrencyKeys(originalKeysObj)

    expect(result).toHaveProperty('rate')
    expect(result).toHaveProperty('code')
    expect(result).toHaveProperty('amount')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('country')
  })
})
