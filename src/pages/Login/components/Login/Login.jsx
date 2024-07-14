import React from 'react'
import FormLoginLayout from '../../../../components/FormLoginLayout/FormLoginLayout'
import imageLogin from "../:./../../../../assets/conejo_kawai.jpg"
import styles from "./Login.module.css"
function Login() {
  return (
    <>
    <FormLoginLayout>


    <img src={imageLogin} alt="" className={styles.loginImage} />
    <span>Inicia Sesión</span>
    <p>Username</p>
    <input type="text" className={styles.inputs}/> 
    <p>password</p>
    <input type="password" className={styles.inputs} />

    <button className={styles.loginInput}>Iniciar Sesion</button>
    </FormLoginLayout>
    
    </>
 
    
  )
}

export default Login