import React from 'react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  public render() {
    return (
      <Html lang="ja">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>タイトル</title>
          <meta name="description" content={'デスクリプション'} />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon-180x180.png" />
          <link rel="icon" type="image/png" href="/images/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/icon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/icon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
          <div id="fb-root" />
        </body>
      </Html>
    )
  }
}
