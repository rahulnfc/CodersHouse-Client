import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <button className={styles.button} type="submit">
                {props.children}
            </button>
        </div>
    )
}

export default Button
