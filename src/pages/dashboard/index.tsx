import { GetServerSideProps } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles.module.css'
import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { TextArea } from '@/components/textArea'
import {FiShare2} from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'

export default function Dashboard(){
    const [input, setInput] = useState("")
    const [publicTask, setPublictask] = useState(false)

    const handleChangePublic = (event: ChangeEvent<HTMLInputElement>) => {
        setPublictask(event.target.checked)
    }

    const handleRegisterTask = (event: FormEvent) => {
        event.preventDefault();

        if(input === "") return;

        alert("TESTE")
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Meu Painel de Tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 
                            className={styles.title}>
                            Qual sua tarefa?
                        </h1>

                        <form onSubmit={handleRegisterTask}>
                            <TextArea 
                                placeholder="Digite qual sua tarefa..."
                                value={input}
                                onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => 
                                    setInput(event.target.value) }
                                   
                            />
                            <div className={styles.checkboxArea}>
                                <input 
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={publicTask}
                                    onChange={handleChangePublic}
                                />
                                <label>Deixar tarefa pública?</label>
                            </div>

                            <button 
                                className={styles.button}
                                type="submit">
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>

                <section className={styles.teskContaiener}>
                    <h1>Minhas Tarefas</h1>
                        
                        <article className={styles.task}>
                            <div className={styles.tagContainer}>
                                <label className={styles.tag}>PUBLICO</label>
                                <button className={styles.shareButton}>
                                    <FiShare2
                                        size={22}
                                        color='#3183ffs'
                                    />
                                </button>
                            </div>
                            
                            <div className={styles.taskContent}>
                                <p>Minha tarefa</p>
                                <button className={styles.trashButton}>
                                    <FaTrash
                                        size={24}
                                        color='#ea3140'
                                    />
                                </button>
                            </div>
                        </article>
                </section>
            </main>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })

    if(!session?.user){
        return{
            redirect:{
                destination:'/',
                permanent: false,
            }
        }
    }
    
    return {
        props: {},
    };
};