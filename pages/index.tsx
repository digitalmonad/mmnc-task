import type { NextPage } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { fetchCurrencies } from '../utils/currencies/fetchCurrencies'

const Home: NextPage = ({}) => {
  return <div></div>
}

export const getStaticProps = async () => {
  const client = new QueryClient()
  await client.prefetchQuery('currencies', fetchCurrencies)

  return {
    props: {
      dehydratedState: dehydrate(client),
    },
  }
}

export default Home
