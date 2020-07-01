import Head from 'next/head'
import Landing from '../components/landing';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dotcom - YJDev</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap" />
      </Head>
     <Landing></Landing>
     <style jsx global>{`
      body{
         margin:0px;
        }
      `}</style>
    </div>
  )
}
