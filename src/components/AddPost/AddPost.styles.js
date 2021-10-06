import styled from 'styled-components'

export const AddPostContainer = styled.div`
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
    position: fixed;
    top: 4rem;
    left: 18.2rem;
    @media (max-width: 768px) {
        top: 10rem;
        left: 5rem;
    }
    @media (max-width: 540px) {
        width: 95%;
        margin-left: -4.3rem;
    }
    @media (max-width: 375px) {
        height: 10rem;
    }
    @media (max-width: 320px) {
        margin-left: -4.5rem;
    }
`
export const PhotoAndInput = styled.div`
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
    @media (max-width: 425px) {
        & img {
            display: none;
        }
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
export const AddPostButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 3rem;
    @media (max-width: 375px) {
        margin-top: 2rem;
    }
`
export const Post = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.7rem;
        margin-left: 0.7rem;
    }
    @media (max-width: 425px) {
        flex-direction: column;
        justify-content: space-around;
        & img {
            width: 1.2rem;
            height: 1.2rem;
            margin-right: 1rem;
            margin-left: 1rem;
        }
        & p {
            display: none;
        }
    }
    @media (max-width: 320px) {
        flex-direction: column;
        justify-content: space-around;
        & img {
            width: 1rem;
            height: 1rem;
            margin-right: 1rem;
            margin-left: 1rem;
        }
    }
`