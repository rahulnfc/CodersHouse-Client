import styled from 'styled-components'

export const NavBar = styled.div`
    background-color: #75a3b7;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    height: 4rem;
    padding: 0 2rem;
    width: 100%;
    position: fixed;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        padding: 0;
    }
`
export const NavBrand = styled.div`
    flex: 2;
    & img {
        width: 12rem;
    }
    @media (max-width: 768px) {
        flex: 1;
        margin-bottom: 1rem;
    }
`
export const Search = styled.div`
    flex: 3;
    width: 100%;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    padding: 0px 5px;
    font-size: 1rem;
    margin: 0 1rem;
    background-color: #ffffff90;
    border: 2px solid #18cdca;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    &input {
        width: 10rem;
    }
    & input:focus {
        outline: none;
        word-wrap: break-word;
    }
    @media (max-width: 768px) {
        margin: 0;
        width: 90%;
    }
    @media (max-width: 375px) {
        margin-bottom: 1rem;
    }
`
export const NavItems = styled.div`
    flex: 6;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color:#000000;
    @media (max-width: 375px) {
        
    }
`
export const NavItem = styled.div`
    color: #000;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    : hover {
        border-bottom: 2px solid #000;
    }
    & img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
`
export const navbarMenuItemLink = styled.div`
    text-decoration: none;
    font-weight: bold;
    color: #000000;
    @media (max-width: 375px) {
        display: none;
    }
`