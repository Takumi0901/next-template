/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
