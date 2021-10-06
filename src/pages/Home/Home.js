import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import MyProfileCard from '../../components/MyProfileCard/MyProfileCard'
import AddPost from '../../components/AddPost/AddPost'
import Posts from '../../components/Posts/Posts'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import styled from 'styled-components'
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
// import ModalComp from '../../components/Modal/Modal'
const server = 'http://localhost:3001'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Middlebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 14rem;
    left: 18.2rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        top: 20rem;
        left: 5rem;
    }
`

const Home = () => {
    const token = cookies.get('userjwt')
    const refreshToken = cookies.get('userjwtrefresh')
    const userId = localStorage.getItem('userId')
    const history = useHistory()
    useEffect(() => {
        // check token is available
        if (!token && !refreshToken) {
            history.push('/login')
        } else if (!token && refreshToken) {
        } else {
            // send browser cookies to the backend using the axios
            axios.get(`${server}/users/me`, { headers: { Authorization: `Bearer ${token} ${userId}` } }).then((res) => {
                console.log(res.data.user)
            }).catch(error => {
                console.log(error)
                cookies.remove('userjwt')
                cookies.remove('userjwtrefresh')
                localStorage.removeItem('userId')
                localStorage.removeItem('isAuthenticated')
                history.push('/login')
            })
        }
    })

    return (
        <>
            <Navbar />
            <Container>
                <MyProfileCard />
                <Middlebar>
                    <AddPost />
                    <Posts />
                </Middlebar>
                <RightSideBar />
            </Container>
        </>
    )
}

export default Home
