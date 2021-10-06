import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
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
export const PostCard = styled.div`
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
export const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ProfilePhoto = styled.div`
    & img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 2px solid hsl(220, 71%, 60%);
        cursor: pointer;
    }
`
export const ProfileInfo = styled.div`
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
export const MoreIcon = styled(MoreHorizIcon)`
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
`
export const PostBody = styled.div`
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
export const PostReactions = styled.div`
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
export const ReactionButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`