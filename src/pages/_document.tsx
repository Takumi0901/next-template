import React from 'react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  public render() {
    return (
      <Html lang="ja">
        <Head></Head>
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
