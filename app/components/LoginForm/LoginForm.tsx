import React from "react";
import Image from "next/image";
import styles from './LoginForm.module.css'

function InputData() {
    return (
        <>
            <input style={{boxSizing:'border-box'}}/>
        </>
    )
}

export default function LoginForm() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <Image
                    src={'/weather-station.png'}
                    width={64}
                    height={64}
                    alt="Weather station"
                />
                <p>Strona logowania</p>
            </div>
            <div className={styles.form}>
                <form >
                    <InputData />
                    <InputData />
                    <button type="submit">Zaloguj</button>
                </form>
            </div>
        </div>

    )
}