// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import NavBar from '../components/navbar';
import GlobalStyle from '../styles/globalStyles';

import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta
          name='description'
          content='Zach Cossman Designs - Custom performant websites'
        />
        <title>Zach Cossman Designs</title>
      </Head>
      <GlobalStyle />
      <NavBar />
      <div className='fullWrap'>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            window.scroll({
              top: 0,
            });
          }}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
