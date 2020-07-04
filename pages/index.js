import Head from 'next/head'
import AppLayout from '../Component/AppLayout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        </AppLayout>
    </div>
  )
}
