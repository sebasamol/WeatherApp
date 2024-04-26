'use client'
import { FormEvent } from 'react'
import styles from './page.module.css'
import LoginForm from '@/app/components/LoginForm/LoginForm'


export default function Login (){
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <LoginForm/>

            </div>
        </main>
    )
}

