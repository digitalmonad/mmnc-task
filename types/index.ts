export type CurrencyT = {
  rate: string
  code: string
  amount: string
  name: string
  country: string
}

export type CurrencyOriginalT = {
  kurz: string
  kód: string
  množství: string
  měna: string
  země: string
}

export type CurrencyMetaInfoT = {
  date: string
  number: string
}

export type CurrenciesApiResponseT = {
  info: CurrencyMetaInfoT
  currencies: CurrencyT[]
}
