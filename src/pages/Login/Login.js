import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import styles from './Login.module.css'
import TextField from '../../components/TextField/TextField'
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies()
const server = "http://localhost:3001"

const Login = () => {
    const history = useHistory()
    useEffect(() => {
        const token = cookies.get('userjwt')
        console.log(token)
        if (token) {
            history.push('/')   
        }
    })

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [userBlocked, setuserBlocked] = useState(false)

    const validate = Yup.object({
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    })

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validate}
            onSubmit={(values => {
                setEmailError(false)
                setpasswordError(false)
                setuserBlocked(false)
                const data = {
                    email: values.email,
                    password: values.password
                }
                axios.post(`${server}/auth/login`, data)
                    .then(res => {
                        // success and store the token to cookies
                        console.log(res.data);
                        cookies.set('userjwt', res.data.token)
                        cookies.set('userjwtrefresh', res.data.refreshToken)
                        localStorage.setItem('userId', res.data.userId)
                        localStorage.setItem('isAuthenticated', true)
                        history.push('/')
                    }).catch((error) => {
                        const response = error.response.data
                        console.log(response);
                        if (response.emailError) {
                            // email error
                            setEmailError(true)
                        } else if (response.passwordError) {
                            // password error
                            setpasswordError(true)
                        } else if (response.userBlocked) {
                            // user blocked
                            setuserBlocked(true)
                        }
                    })
            })}
        >
            {formik => (
                <div className={styles.login}>
                    <img className={styles.logo} src="/assets/images/CodersHouse.png" alt="CodersHouse" />
                    <h1 className={styles.title}>Stay updated on your proffesional world</h1>
                    <Card>
                        <Form>
                            <TextField
                                label="Email"
                                id="email"
                                type="text"
                                name="email"
                                className={styles.input}
                            />
                            {emailError && <p className={styles.error}>Invalid email address</p>}
                            <TextField
                                label="Password"
                                id="password"
                                type="password"
                                name="password"
                                className={styles.input}
                            />
                            {passwordError && <p className={styles.error}>Invalid password</p>}
                            <Link className={styles.forgotPassword} to="/forgot-password" >Forgot your password?</Link>
                            {userBlocked && <p className={styles.error}>Your with this email is blocked</p>}
                            <Button>Sign in</Button>
                        </Form>
                        <p className={styles.JoinNow}>
                            New to Coders House? <Link className={styles.link} to="/register">Join Now</Link>
                        </p>
                    </Card>
                </div >
            )}
        </Formik >
    )

}

export default Login
