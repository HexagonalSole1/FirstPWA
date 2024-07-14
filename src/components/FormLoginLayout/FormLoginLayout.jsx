import React from 'react'
import styles from "./FormLoginLayout.module.css"


function FormLoginLayout({ children }) {
  return (
    <form className={styles.form}>
    <div className={styles.formInfo}>
    {children}

    </div>
  </form>
  )
}

export default FormLoginLayout