import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MyProfileCard.module.css'

const MyProfileCard = () => {
    return (
        <div className={styles.MyProfileCardContainer}>
            <div className={styles.profile}>
                <div className={styles.coverPhoto}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9itY1GUI1WVOENlsO4joMDrqmL2ER-8tbSQ&usqp=CAU" alt="coverPhoto" />
                </div>
                <div className={styles.profilePhoto}>
                    <img src="/assets/images/megha.jpeg" alt="profile" />
                </div>
                <div className={styles.profileInfo}>
                    <h1>Megha Prakash</h1>
                    <h2>Django Developer</h2>
                </div>
                <hr />
                <div className={styles.views}>
                    <p> No. of Views of Profile: </p>
                    <span>1.5k</span>
                </div>
                <div className={styles.views}>
                    <p> No. of Views of Posts: </p>
                    <span>1.5k</span>
                </div>
                <hr />
                <div className={styles.profileStats}>
                    <div className={styles.stat}>
                        <p> <span>1.5k</span> <br /> Followers </p>
                    </div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.stat}>
                        <p> <span>1.5k</span> <br /> Connections </p>
                    </div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.stat}>
                        <p> <span>1.5k</span> <br /> Following </p>
                    </div>
                </div>
                <hr />
                <Link to="/my-profile" className={styles.viewProfileLink}>View Profile</Link>
            </div>
        </div>
    )
}

export default MyProfileCard


