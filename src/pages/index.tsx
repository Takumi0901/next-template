import React, { useEffect, useState, VFC } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: VFC = () => {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    setCount(1)
  }, [])

  const hoge = 'hgoe'

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
