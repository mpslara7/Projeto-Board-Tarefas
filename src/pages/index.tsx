import { GetStaticProps } from 'next';
import styles from '@/styles/home.module.css';
import Head from 'next/head';
import Image from 'next/image';

import heroImg from '../../public/assets/hero.png';

import { db } from '@/services/firebaseConnection';

import { collection, getDocs } from 'firebase/firestore';

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas | Organize suas tarefas</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para voçê organizar seus estudos e suas tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>{posts}</span>
          </section>
          <section className={styles.box}>
            <span>{comments}</span>
          </section>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const commentRef = collection(db, 'comments');
  const postRef = collection(db, 'tarefas');

  const commentSnapShot = await getDocs(commentRef);
  const postSnapShot = await getDocs(postRef);

  return {
    props: {
      posts: postSnapShot.size || 0,
      comments: commentSnapShot.size || 0,
    },
  };
};
