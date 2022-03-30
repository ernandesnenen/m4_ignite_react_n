import { ChakraProvider } from '@chakra-ui/react'

import {AppProps} from 'next/app'
import { SideBarDrawerProvider } from '../components/contexts/SideBarDrawerContext'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClientProvider, QueryClient} from 'react-query'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === "development") {
  makeServer()
}




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
