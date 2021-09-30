import React from 'react'
import styles from './AddPost.module.css'

const AddPost = () => {
    return (
        <div className={styles.addPostContainer}>
            <div className={styles.photoAndInput}>
                <img src="/assets/images/megha.jpeg" alt="Megha" className={styles.profilePhoto} />
                <input type="text" placeholder="What's on your mind?" className={styles.postInput} />
                <button className={styles.postButton}>Post</button>
            </div>
            <div className={styles.addPostButtons}>
                <div className={styles.addPost}>
                    <img src="/assets/images/gallery.png" alt="Gallery" className={styles.icon} />
                    <p>Gallery</p>
                </div>
                <div className={styles.addPost}>
                    <img src="/assets/images/video-camera.png" alt="VideoCamera" className={styles.icon} />
                    <p>Video</p>
                </div>
                <div className={styles.addPost}>
                    <img src="/assets/images/calendar.png" alt="Calendar" className={styles.icon} />
                    <p>Event</p>
                </div>
                <div className={styles.addPost}>
                    <img src="/assets/images/article.png" alt="Article" className={styles.icon} />
                    <p>Writem article</p>
                </div>
            </div>
        </div>
    )
}

export default AddPost
