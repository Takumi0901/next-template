import Link from 'next/link'
import React, { VFC } from 'react'
import Layout from 'src/components/Layout'

const AboutPage: VFC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
