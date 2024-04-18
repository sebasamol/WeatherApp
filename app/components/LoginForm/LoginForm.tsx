import React from "react";
import Image from "next/image";
import styles from './LoginForm.module.css'

interface InputProps {
    name: string,
    type: string,
    placeholder: string,
}
function InputData({ name, type, placeholder}: InputProps) {
    return (
        <div className={styles.input_group}>
            <input className={styles.input} type={type} placeholder={placeholder} required={true} ></input>
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
            <div className={styles.form_container}>
                <form className={styles.form_data}>
                    <InputData name='Nazwa użytkownika' type='text' placeholder=''/>
                    <InputData name='Hasło' type='password' placeholder=''/>
                    <LoginButton/>

                </form>
                
            </div>
        </div>

    )
}