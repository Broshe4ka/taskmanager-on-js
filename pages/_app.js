import '../styles/globals.scss'
import Layout from '../components/Layout';
import React from 'react';
import {SessionProvider} from 'next-auth/react'

const MyApp = ({ Component, pageProps, session }) => (
   <SessionProvider session = {session}>
      <Layout>
            <Component {...pageProps} />
      </Layout>
   </SessionProvider>
);

export default React.memo(MyApp);
