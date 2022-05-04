import type { NextPage, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { fetchAndParseCurrencies } from '../utils/currencies/fetchAndParseCurrencies'
import { queryKeys } from '../react-query/queryKeys'
import { useCurrenciesData } from '../hooks/currencies/useCurrenciesData'
import { CurrenciesTable } from '../components/organisms/CurrenciesTable'

const Home: NextPage = ({}) => {
  const data = useCurrenciesData()
  return (
    <div>
      {data.data.data && (
        <CurrenciesTable currencies={data.data.data.currencies} />
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = new QueryClient()
  await client.prefetchQuery(queryKeys.currencies, fetchAndParseCurrencies)

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, ['common'])),
      dehydratedState: dehydrate(client),
    },
  }
}

export default Home
