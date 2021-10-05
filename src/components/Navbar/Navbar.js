import React from 'react'
import { Link } from 'react-router-dom'
import { Input, InputAdornment } from '@material-ui/core'
import { Home, SearchSharp, GroupSharp, Sms, NotificationsActive } from '@material-ui/icons'
import {NavBar, NavBrand, Search, NavItems, NavItem, navbarMenuItemLink} from './Navbar.styles'

const Navbar = () => {
    return (
        <NavBar>
            <NavBrand>
                <Link to="/">
                    <img src="/assets/images/CodersHouse.png" alt="CodersHouse" />
                </Link>
            </NavBrand>
            <Search>
                <Input startAdornment={
                    <InputAdornment position="start">
                        <SearchSharp />
                    </InputAdornment>
                }
                    placeholder="Search persons, skills..."
                    disableUnderline={true}
                />
            </Search>
            <NavItems>
                <NavItem style={{borderBottom: '2px solid #000'}}>
                    <Home />
                    <Link to="/" component={navbarMenuItemLink}>Home</Link>
                </NavItem>
                <NavItem>
                    <GroupSharp />
                    <Link to="/my-network" component={navbarMenuItemLink}>Networks</Link>
                </NavItem>
                <NavItem>
                    <Sms />
                    <Link to="/messages" component={navbarMenuItemLink}>Messaging</Link>
                </NavItem>
                <NavItem>
                    <NotificationsActive />
                    <Link to="/notifications" component={navbarMenuItemLink}>Notifications</Link>
                </NavItem>
                <NavItem>
                    <img src="/assets/images/megha.jpeg" alt="Megha" />
                    <Link to='/profile' component={navbarMenuItemLink}>Profile</Link>
                </NavItem>
            </NavItems>
        </NavBar>
    )
}

export default Navbar
