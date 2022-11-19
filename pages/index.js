import Head from 'next/head';
import React from 'react';
import styles from '../styles/home.module.scss'
import icon from '../public/favicon/icon.png'
import Link from 'next/link';
import bg from '../public/bg.png'

const Home = () => (
  <>
      <Head>
        <title>TaskManager - Welcome!</title>
        <link rel="shortcut icon" href="/favicon/icon.svg" />
      </Head>

        <div  className={styles.wrapper}>
          <div className={styles.SVGbg}>
          <svg width="256" height="256" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M263.539 367.263C246.648 441.071 230.417 512 256 512C323.875 511.932 388.95 484.939 436.945 436.945C484.939 388.95 511.932 323.875 512 256C512 205.368 496.986 155.873 468.856 113.774C440.726 71.6751 400.745 38.863 353.967 19.4869C307.189 0.11092 255.716 -4.95873 206.057 4.91908C156.398 14.7969 110.783 39.1785 74.9808 74.9808C65.0796 84.8819 56.0519 95.5336 47.9628 106.814C46.2841 108.3 44.9259 110.202 43.9381 112.587C43.936 112.592 43.934 112.597 43.9319 112.602C24.9249 140.711 11.6023 172.458 4.91908 206.057C-4.95873 255.716 0.11092 307.189 19.4869 353.967C28.3936 375.47 40.1393 395.536 54.321 413.676C62.6219 424.293 112.086 369.087 162.469 312.856C173.88 300.121 185.338 287.334 196.375 275.246C184.95 268.277 175.61 261.625 169.984 256C157.565 243.581 137.822 262.064 120.811 277.989C105.13 292.669 91.7714 305.175 88.6127 289.295C86.526 278.805 79.979 260.351 72.4188 239.041C56.1243 193.112 35.1237 133.918 43.9319 112.602C45.2484 110.655 46.5921 108.725 47.9628 106.814C58.0023 97.923 79.5055 103.87 101.805 110.036C124.538 116.323 148.098 122.839 161.183 114.096C189.249 95.3428 222.245 85.3334 256 85.3334C301.264 85.3334 344.673 103.314 376.68 135.321C408.686 167.327 426.667 210.736 426.667 256C426.667 269.986 437.13 291.951 448.051 314.878C463.487 347.285 479.839 381.613 468.856 398.05C457.866 414.497 419.797 412.598 383.885 410.806C358.515 409.54 334.221 408.328 321.311 413.676C306.764 419.701 312.209 403.07 318.799 382.941C326.336 359.919 335.371 332.32 317.708 328.806C307.688 326.813 292.387 321.543 275.259 314.501C271.695 331.625 267.598 349.527 263.539 367.263Z" fill="#3A3A3A"/>
          </svg>

          </div>
          <div className={styles.text_block}>
            <div className={styles.text_block__header}>
              Welcome to TaskManager!<span>_</span>
            </div>

            <div className={styles.text_block__text}>
              It's a web application, that will help you competently control both work and everyday tasks!
              The simple and flat design won't take you long to figure it out, but will help you get started faster.
            </div>
            
            <Link href="/signup">
              <div className={styles.text_block__button}>
                Get Start!
              </div>
            </Link>
          </div>
        </div>
  </>
);

export default React.memo(Home);