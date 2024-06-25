'use client'
import React, { useState } from "react";
import { FormEvent } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from './LoginForm.module.css'


export default function LoginForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const formData = new FormData(event.currentTarget)
            const response = await fetch('/pages/api/submit', {
                method: 'POST',
                body: formData,
            })

            if (response.status == 200) {
                router.push('/')
                
            } else {
                setError('Nieprawidłowa nazwa użytkownika lub hasło')

            }

        } catch (error) {
            console.log(error)
            
        } finally {
            setIsLoading(false)
        }

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
                        {/* <InputData testID='username' name='Nazwa użytkownika' type='text' placeholder='' id='login' />
                        <InputData testID='password' name='Hasło' type='password' placeholder='' id='password'  /> */}
                        <div className={styles.input_group}>
                            <input
                                className={styles.input}
                                id='login'
                                name='login'
                                type='text'
                                data-testid="username"
                                required={true}
                                defaultValue={username}
                                onChange={(e) => setUsername(e.target.value)}
                                
                            ></input>
                            <label className={styles.label}>Nazwa użytkownika</label>

                        </div>
                        <div className={styles.input_group}>
                            <input
                                className={styles.input}
                                id='password'
                                name='password'
                                type='password'
                                data-testid="password"
                                required={true}
                                defaultValue={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <label className={styles.label}>Hasło</label>

                        </div>

                        {error && <div className={styles.display_error} >
                            <Image
                                src="/error.png"
                                width={18}
                                height={18}
                                alt="Error"

                            />
                            <div data-testid="error" className={styles.error} >{error}</div></div>}

                        <button className={styles.button} type="submit" disabled={isLoading}>
                            {isLoading ? 'Logowanie...' : 'Zaloguj'}</button>
                    </form>

                </div>
            </main>

        </div>

    )
}

