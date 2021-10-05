import React from 'react';
import styled from 'styled-components';
import Post from './Post'

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40rem;
    height: 57vh;
    border-radius: 5px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    overflow-y: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width:540px){
        margin-left: -3.3rem;
        width: 38rem;
    }
    @media screen and (max-width:425px){
        margin-left: -3.7rem;
        width: 30rem;
    }
    @media screen and (max-width:375px){
        margin-left: -4.1rem;
        width: 27rem;
    }
    @media screen and (max-width:375px){
        margin-left: -4.3rem;   
        width: 23rem;
    }
`

const Posts = () => {
    return (
        <PostContainer>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </PostContainer>
    );
}

export default Posts;