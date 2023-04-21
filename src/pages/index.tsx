import styles from '@/styles/home.module.css'
import Head from 'next/head'
import Image from 'next/image'

import heroImg from '../../public/assets/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas | Organize suas tarefas</title>
      </Head>
    

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt= "Logo Tarefas"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para voçê organizar seus estudos e suas tarefas
        </h1>
      </main>
    </div>
  )
}
