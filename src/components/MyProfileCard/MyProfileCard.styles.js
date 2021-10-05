import styled from 'styled-components'

export const MyProfileCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    width: 14rem;
    height: 25rem;
    margin-bottom:5rem;
    background-color: #e8e7e7;
    border-radius: 10px;
    border: 2px solid #4f80e1;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 4rem;
    left: 0;
    @media (max-width: 768px) {
        display: none;
    }
`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const CoverPhoto = styled.div`
    width: 100%;
    & img {
        border-radius: 10px 10px 0px 0px;
        width: 100%;
        height: 4rem;
    }
`
export const ProfilePhoto = styled.div`
    margin-top: -2rem;
    & img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: 2px solid #4f80e1;
    }
`
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    & h1 {
        font-size: 1.2rem;
        font-weight: bold;
        color: #000;
    }
    & h2 {
        font-size: 0.8rem;
        font-weight: bold;
        color: #00000090;
        margin-top: -1.5rem;
        margin-bottom: -1.5rem;
    }
`
export const HorizontalLine = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #00000090;
    border: none;
`
export const Views = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 0.9rem;
    font-weight: bold;
    color: #00000095;
    width: 100%;
    font-size: 0.7rem;
    & p {
        margin-right: 1rem;
    }
    & span{
        color: #0066ff;
    }
`
export const ProfileStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: -15rem;
    padding: 1rem 0;
    border-top: 1px solid #00000095;
    border-bottom: 1px solid #00000095;
`
export const Stats = styled.div`
    text-align: center;
    font-size: 0.9rem;
    color: #000000;
`
export const VerticalLine = styled.div`
    border-left: 1px solid #00000095; 
`
export const ViewProfileLink = styled.div`
    text-decoration: none;
    font-weight: bold;
    color: #0066ff;
    font-size: 0.9rem;
    margin-top: 0.6rem;
    &:hover {
        text-decoration: none;
        color: #133568;
    }
`