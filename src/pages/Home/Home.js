import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Home.module.css'
import axios from 'axios'
const server = "http://localhost:3001"

const Home = () => {
    useEffect(() => {
        axios.get(`${server}/user/me`
        ).then(res => {
            console.log(res)
        }).catch(err => {
            const response = err.response.data
            console.log(response)
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.home}>
                This is the home page...
            </div>
        </>
    )
}

export default Home
