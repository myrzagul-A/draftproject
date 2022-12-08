import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head><title>Ninja List | Home</title>
    <meta name='keywords' content='ninjas'></meta> </Head>
    <div >
      
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem sdvnlakjsdnfvkasjndvksd,c kwjefn ksjdfn kjsfkd ksdfnk jNSKFNksfnkj</p>

            <p className={styles.text}>lorem sdvnlakjsdnfvkasjndvksd,c kwjefn ksjdfn kjsfkd ksdfnk jNSKFNksfnkj</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja listing</Link>
        
        
    </div>
    </>
  )
}
