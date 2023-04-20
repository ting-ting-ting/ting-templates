import '../styles/global.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '@core/ui/Header';
import Sidebar from '@core/ui/Sidebar';
import classes from './app.module.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className={classes.main}>
        <Header />
        <div className={classes.layout}>
          <Sidebar />
          <div className={classes.page}>
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
