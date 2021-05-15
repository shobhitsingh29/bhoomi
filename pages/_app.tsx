import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { Provider } from 'next-auth/client'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
      <Provider session={pageProps.session}>
          <Head />
          <ManagedUIContext>
              <Layout pageProps={pageProps}>
                  <Component {...pageProps} />
              </Layout>
          </ManagedUIContext>
      </Provider>
  )
}