'use client'
import React from "react";
import { FormEvent } from "react";
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
function LoginButton() {

    return (
        <>
            <button className={styles.button} type="submit">Zaloguj</button>
        </>
    )
}



export default function LoginForm() {

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/pages/api/submit', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        //const data = await response.json()
        // ..
        console.log(response)
        console.log(formData)
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
                        <LoginButton />

                    </form>

                </div>
            </main>
        </div>

    )
}

