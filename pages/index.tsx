import type { NextPage, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { fetchCurrencies } from '../utils/currencies/fetchCurrencies'

const Home: NextPage = ({}) => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = new QueryClient()
  await client.prefetchQuery('currencies', fetchCurrencies)

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, ['common'])),
      dehydratedState: dehydrate(client),
    },
  }
}

export default Home
