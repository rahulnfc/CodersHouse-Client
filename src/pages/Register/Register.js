import React,{useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import styles from './Register.module.css'
import TextField from '../../components/TextField/TextField'
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies()
const server = 'http://localhost:3001'


const Register = () => {
    const history = useHistory()
    useEffect(() => {
        const token = cookies.get('userjwt')
        if (token) {
            history.push('/')   
        }
    })

    const [emailExists, setEmailExists] = useState(false)
    const [phoneExists, setPhoneExists] = useState(false)

    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('User name is required')
            .matches(/^[a-zA-Z0-9]+$/, 'Only letters and numbers are allowed'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phone_number: Yup.string()
            .matches(/^\d{10}$/, 'Invalid phone number')
            .required('Phone number is required'),
        password: Yup.string()
            .min(6, 'Password will be at least 6 characters')
            .required('Password is required'),
        password2: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                phone_number: '',
                password: '',
                password2: ''
            }}
            validationSchema={validate}
            onSubmit={(values => {
                setEmailExists(false)
                setPhoneExists(false)
                const data = {
                    username: values.username,
                    email: values.email,
                    phone_number: values.phone_number,
                    password: values.password
                }
                axios.post(`${server}/auth/register`, data)
                    .then(res => {
                        // success and load the login page
                        history.push('/login')
                    }).catch((error) => {
                        const response = error.response.data
                        if(response.emailError){
                            // email error
                            setEmailExists(true)
                        } else if(response.phonenumberError){
                            // password error
                            setPhoneExists(true)
                        }
                    })
            })}
        >
        { formik => (
            <div className={styles.register}>
                <img className={styles.logo} src="/assets/images/CodersHouse.png" alt="CodersHouse" />
                <h1 className={styles.title}>Make the most of your professional life</h1>
                <Card>
                    <Form>
                        <TextField
                            label="Username"
                            id="username"
                            type="text"
                            name="username"
                            className={styles.input}
                        />
                        <TextField
                            label="Email"
                            id="email"
                            type="text"
                            name="email"
                            className={styles.input}
                        />
                        {emailExists && <p className={styles.error}>Email already exists</p>}
                        <TextField
                            label="Phone Number"
                            id="phone_number"
                            type="number"
                            name="phone_number"
                            className={styles.input}
                        />
                        {phoneExists && <p className={styles.error}>Phone number already exists</p>}
                        <TextField
                            label="Password"
                            id="password"
                            type="password"
                            name="password"
                            className={styles.input}
                        />
                        <TextField
                            label="Confirm Password"
                            id="password2"
                            type="password"
                            name="password2"
                            className={styles.input}
                        />
                        <p className={styles.agreement}>
                            By clicking Agree & Join, you agree to the
                            LinkedIn User <span className={styles.link}>Agreement, Privacy Policy,</span> and
                            <span className={styles.link}> Cookie Policy.</span>
                        </p>
                        <Button>Agree & Join</Button>
                    </Form>
                    <hr /><p className={styles.or}> OR </p>
                    <button className={styles.googlesignup} type="submit">
                        <img className={styles.googleLogo} src="/assets/images/googleLogo.png" alt="Google" />
                        <Link className={styles.link} to="/google_register">Join with Google</Link>
                    </button>
                    <p className={styles.alreadyHaveAccount}>
                        Already on Coders House? <Link className={styles.link} to="/login">Sign in</Link>
                    </p>
                </Card>
            </div>
        )}
        </Formik >
    )
}

export default Register
