import React, { VFC } from 'react'
import Link from 'next/link'
import Layout from 'src/components/Layout'

const IndexPage: VFC = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>
        Hello Next.js{' '}
        <span role="img" aria-label="Hi">
          👋
        </span>
      </h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
