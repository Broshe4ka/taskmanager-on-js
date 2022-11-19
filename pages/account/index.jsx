import styles from './account.module.scss'
import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import {useSession, signIn, signOut} from 'next-auth/react';
import SignIn  from '../signin';
import Image from 'next/image';


const Account = () => {
  const {data: session, status} = useSession({required:true})

  if (status === 'authenticated'){
    return(
      <>
      <Head>
        <title>Hello, {session.user.name} !</title>
        <link rel="shortcut icon" href="/favicon/icon.svg" />
      </Head>

        <div className={styles.user_account}>

          <div className={styles.row }>
            <div className={styles.user_block}>

              <div className={styles.user__photo}>
                <img src={session.user.image} alt="Logo"/>
                <div className={styles.user_avatar__emoji}>
                  🌴
                </div>
              </div>

            </div>

            <div className={styles.info}>
                <h1>Welcome to Task Manager!</h1>
                <div className={styles.username}>
                <h5>Name:</h5> {session.user.name}
                </div>
                <div className={styles.mail}>
                <h5>Email:</h5> {session.user.email}
                </div>

              </div>
            </div>
          <div className={styles.tasks}>
            <button>Create new task desk</button>
          </div>
        </div>
      </>
    );
  }else {
    
      return(
        <SignIn/>
      );
    }
}

export default React.memo(Account);

// {session.user.email}