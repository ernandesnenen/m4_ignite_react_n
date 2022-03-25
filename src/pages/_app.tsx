import { ChakraProvider } from '@chakra-ui/react'

import {AppProps} from 'next/app'
import { SideBarDrawerProvider } from '../components/contexts/SideBarDrawerContext'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClientProvider, QueryClient} from 'react-query'

if (process.env.NODE_ENV === "development") {
  makeServer()
}

const clientQuery = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={clientQuery}>
    <ChakraProvider theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
       </SideBarDrawerProvider>
    </ChakraProvider>
    <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
