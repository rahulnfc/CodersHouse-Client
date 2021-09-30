import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Input, InputAdornment } from '@material-ui/core'
import { Home, SearchSharp, GroupSharp, Sms, NotificationsActive } from '@material-ui/icons'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <Link to='/' >
                    <img src="/assets/images/CodersHouse.png" alt="CodersHouse" className={styles.navbarBrandImage} />
                </Link>
            </div>
            <div className={styles.navbarSearch}>
                <Input startAdornment={
                    <InputAdornment position="start">
                        <SearchSharp />
                    </InputAdornment>
                }
                    placeholder="Search jobs, skills, companies..."
                    className={styles.navbarSearchInput}
                    disableUnderline={true}
                />
            </div>
            <div className={styles.navbarMenu} id="navbarMenu" >
                <ul className={styles.navbarMenuList}>
                    <li className={`${styles.navbarMenuItem} ${styles.navbarMenuItemActive}`}>
                        <Home />
                        <Link to='/' className={styles.navbarMenuItemLink}>Home</Link>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <GroupSharp />
                        <Link to='/my-network' className={styles.navbarMenuItemLink}>Network</Link>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <Sms />
                        <Link to='/messages' className={styles.navbarMenuItemLink}>Messaging</Link>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <NotificationsActive />
                        <Link to='/notifications' className={styles.navbarMenuItemLink}>Notifications</Link>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <Link to='/profile' className={styles.navbarMenuItemLink}>
                            <img src="/assets/images/megha.jpeg" alt="Megha" className={styles.navbarMenuItemImage} />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar