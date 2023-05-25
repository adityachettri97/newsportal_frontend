import Head from 'next/head'
import News from './news'

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Portal</title>
      </Head>
        <div>
          <News/>
        </div>
    </div>
  )
}
