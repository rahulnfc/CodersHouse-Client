import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import MyProfileCard from '../../components/MyProfileCard/MyProfileCard'
// import AddPost from '../../components/AddPost/AddPost'
// import RightSideBar from '../../components/RightSideBar/RightSideBar'
import styles from './Home.module.css'
import axios from 'axios'
import Cookies from 'universal-cookie'
const server = 'http://localhost:3001'

const Home = () => {
    const token = document.cookie.split("=")[1]
    console.log(token);
    const userId = localStorage.getItem('userId')
    const history = useHistory()
    useEffect(() => {
        // check token is available
        if (!token) {
            history.push('/')
        } else {
            axios.get(`${server}/users/me?token=${token}&userId=${userId}`).then(res => {
                console.log(res.data.user.username)
                const response = res.data.user
                document.getElementById('username').append(response.username)
            }).catch(error => {
                console.log(error);
                const cookies = new Cookies();
                cookies.remove('userjwt');
                localStorage.removeItem('userId')
                localStorage.removeItem('isAuthenticated')
                history.push('/login')
            })
        }
    })

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <MyProfileCard />
                {/* <AddPost /> */}
                {/* <RightSideBar /> */}
            </div>
        </>
    )
}

export default Home
