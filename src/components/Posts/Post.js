import React from 'react';
import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #e8e7e7;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width:540px){
        width: 80%;
    }
`
const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const ProfilePhoto = styled.div`
    & img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 2px solid hsl(220, 71%, 60%);
        cursor: pointer;
    }
`
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: -20rem;
    & p {
        font-size: 1.2rem;
        font-weight: bold;
        color: #000;
        cursor: pointer;
    }
    @media screen and (max-width:540px){
        margin-left: -12rem;
    }
    @media screen and (max-width:425px){
        margin-left: -6rem;
    }
    @media screen and (max-width:375px){
        margin-left: -4rem;
    }
    @media screen and (max-width:320px){
        margin-left: -1.2rem;
    }
`
const MoreIcon = styled(MoreHorizIcon)`
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
`
const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 1rem 1rem 0 0;
    padding: 1rem 1rem 0 0;
    & p{
        font-size: 1.2rem;
        color: #000;
    }
    @media screen and (max-width:540px){
        font-size: 0.8rem;
    }
`
const PostReactions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin: 1rem 0 0 0;
    padding: 1rem 0 0 0;
    & span {
        font-size: 1.2rem;
        color: #000;
    }
`
const ReactionButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Post = () => {
    return (
        <PostCard>
            <PostHeader>
                <ProfilePhoto>
                    <img src="/assets/images/megha.jpeg" alt="avatar" />
                </ProfilePhoto>
                <ProfileInfo>
                    <p>Megha Prakash</p>
                    <span>25 Minutes Ago</span>
                </ProfileInfo>
                <MoreIcon />
            </PostHeader>
            <PostBody>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem.
                </p>
            </PostBody>
            <PostReactions>
                <ReactionButton>
                    <ThumbUpIcon />
                    <span>Like</span>
                </ReactionButton>
                <ReactionButton>
                    <CommentIcon />
                    <span>Comment</span>
                </ReactionButton>
            </PostReactions>
        </PostCard>
    )
}

export default Post;
