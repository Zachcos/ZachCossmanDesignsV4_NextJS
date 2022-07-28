import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/navbar';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
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
      <NavBar />
      <div className='fullWrap'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
