import styles from './passforgot.module.scss'
import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';

const PassW = () => {
  return(
  <>
    <Head>
      <title>Sign in</title>
    </Head>

    <div className={styles.loginform}>

      <form onSubmit="" className={styles.form}>
        <div className={styles.label}>Sign in</div>
        <input
          required
          type="email"
          placeholder="Enter email"
        />
        <div className={styles.quest}>We will send you a auntification code on your email</div>
        <button type="submit">Send code</button>
      </form>

    </div>
  </>
);
}

export default React.memo(PassW);