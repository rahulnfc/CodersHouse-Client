import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import styles from './GoogleRegister.module.css'

const GoogleRegister = () => {
    return (
        <div className={styles.GoogleRegister}>
            <img className={styles.logo} src="/assets/images/CodersHouse.png" alt="CodersHouse" />
            <h1 className={styles.title}>Make the most of your professional life</h1>

            <Card>
                <div className={styles.googleCard}>
                    <img className={styles.profilePicture} src="assets/images/megha.jpeg" alt="ProfilePicture" />
                    <div className={styles.cardContent}>
                        <h2 className={styles.username}> Megha Prakash </h2>
                        <h3 className={styles.email}> meghaprakash@gmail.com </h3>
                    </div>
                    <Link className={styles.notyou} to="/register">Not you?</Link>
                </div>
                <form>
                    <label className={styles.label}>Password (6 or more characters)</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className={styles.input}
                    />
                    <p className={styles.agreement}>
                        By clicking Agree & Join, you agree to the
                        LinkedIn User <Link className={styles.link}>Agreement, Privacy Policy,</Link> and
                        <Link className={styles.link}> Cookie Policy.</Link>
                    </p>
                    <Button>Agree & Join</Button>
                </form>
                <p className={styles.alreadyHaveAccount}>
                    Already on Coders House? <Link className={styles.link} to="/login">Sign in</Link>
                </p>
            </Card>
        </div>
    )
}

export default GoogleRegister
