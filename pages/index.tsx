import Head from 'next/head'

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Abhijit Paul</title>
        <meta name="description" content="Abhijit's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>

      <footer />
    </div>
  )
}
export default Home
