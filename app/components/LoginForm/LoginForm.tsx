'use client'
import React, { useState } from "react";
import { FormEvent } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from './LoginForm.module.css'

interface InputProps {
    name: string,
    type: string,
    placeholder: string,
    id: string,
}

function InputData({ name, type, placeholder, id }: InputProps) {
    return (
        <div className={styles.input_group}>
            <input className={styles.input} type={type} placeholder={placeholder} required={true} name={id}></input>
            <label className={styles.label}>{name}</label>
        </div>
    )
}


export default function LoginForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()
        setIsLoading(true)
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/pages/api/submit', {
            method: 'POST',
            body: formData,
        })

        //const data = await response.json()
        if (response.status == 200) {
            router.push('/')
        }
        console.log(response)


    }


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.description}>
                    <Image
                        src={'/weather-station.png'}
                        width={64}
                        height={64}
                        alt="Weather station"
                    />
                    <p>Strona logowania</p>
                </div>
                <div className={styles.form_container}>
                    <form className={styles.form_data} onSubmit={handleSubmit}>
                        <InputData name='Nazwa użytkownika' type='text' placeholder='' id='login' />
                        <InputData name='Hasło' type='password' placeholder='' id='password' />
                        {/* <LoginButton /> */}
                        <button className={styles.button}type="submit" disabled={isLoading}>{isLoading ? 'Logowanie...' : 'Zaloguj'}</button>

                    </form>

                </div>
            </main>
        </div>

    )
}

