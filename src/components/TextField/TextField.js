import React from 'react'
import { ErrorMessage, useField } from 'formik'
import styles from './TextField.module.css'

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={field.name} className={styles.label} >{label}</label>
      <input {...field} {...props} />
      <ErrorMessage component="div" name={field.name} className={styles.error} meta={meta} />
    </>
  );
}

export default TextField
