import React from 'react'
import styled from 'styled-components'

const AddPostContainer = styled.div`
    width: 40rem;
    height: 8rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #e8e7e7;
    color: #000;
    border-radius: 10px;
    border: 2px solid #4f80e1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    @media (max-width: 425px) {
        width: 90%;
    }
    @media (max-width: 375px) {
        height: 10rem;
    }
`
const PhotoAndInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 3.2rem;
    & img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 2px solid hsl(220, 71%, 60%);
    }
    & input {
        width: 60%;
        height: 3rem;
        border: 1px solid #4f80e1;
        border-radius: 5px;
        padding: 1rem;
    }
    & input:focus {
        outline: none;
    }
    & button {
        width: 5rem;
        height: 2rem;
        border: none;
        margin: 0;
        border-radius: 5px;
        background-color: #4f80e1;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }
    & button:hover {
        color: #000;
        background-color: #3f6cc9;
    }
    @media (max-width: 375px) {
        flex-direction: column;
        justify-content: space-between;
        & img {
            display: none;
        }
        & input {
            width: 90%;
            margin-bottom: 1rem;
        }
    }
`
const AddPostButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 3rem;
    @media (max-width: 375px) {
        margin-top: 2rem;
    }
`
const Post = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.7rem;
    }
    @media (max-width: 425px) {
        flex-direction: column;
        justify-content: space-around;
        & img {
            width: 0.8rem;
            height: 0.8rem;
            margin-right: 0;
        }
    }
    @media (max-width: 320px) {
        margin-top: -1rem;
        & p {
            display: none;
        }
    }
`

const AddPost = () => {
    return (
        <AddPostContainer>
            <PhotoAndInput>
                <img src="/assets/images/megha.jpeg" alt="Megha" />
                <input type="text" placeholder="What's on your mind?" />
                <button>Post</button>
            </PhotoAndInput>
            <AddPostButtons>
                <Post>
                    <img src="/assets/images/gallery.png" alt="Gallery" />
                    <p>Gallery</p>
                </Post>
                <Post>
                    <img src="/assets/images/video-camera.png" alt="VideoCamera" />
                    <p>Video</p>
                </Post>
                <Post>
                    <img src="/assets/images/calendar.png" alt="Calendar" />
                    <p>Event</p>
                </Post>
                <Post>
                    <img src="/assets/images/article.png" alt="Article" />
                    <p>Article</p>
                </Post>
            </AddPostButtons>
        </AddPostContainer>
    )
}

export default AddPost


