import styles from './registration.module.scss'
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

const Registration = () => {
  return(
  <>
    <Head>
      <title>Sing up</title>
    </Head>
    <div className={styles.regform}>

      <form action="" className={styles.form}>
        <div className={styles.label}>Sign up</div>
        <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder='E-mail'
        />

        <input 
        type="password" 
        name="pass" 
        id="pass" 
        placeholder='Password'
        />

        <div className={styles.quest}>
          Have an account - <Link href="/signin">sign in</Link>
        </div>
        <button type="submit">Sign up</button>
      </form>

    </div>

  </>
);
}
export default React.memo(Registration);
