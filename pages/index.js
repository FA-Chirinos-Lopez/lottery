import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {



  }, [])



  return (
    <div className={styles.container}>
      <Head>
        <title>LopezLottery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/LotteryIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a >LopezLottery!</a>
        </h1>
        <section className="stage">
          <figure onClick={() => router.push('/game')} id='bubble' className="ball bubble"><h1 className='playText'>Play</h1></figure>
        </section>





      </main>

    </div>
  )
}
