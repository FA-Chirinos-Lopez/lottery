
import Head from 'next/head'
import Bubble from '../components/bubble'

import styles from '../styles/Home.module.css'



export default function Game() {




    return (
        <div className={styles.container}>
            <Head>
                <title>LopezLottery</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/LotteryIcon.png" />
            </Head>

            <h1>LopezLottery</h1>

            <Bubble NumberOfBubbles={6} />





        </div>
    )
}