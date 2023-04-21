import '../styles/global.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
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
            <DndProvider backend={HTML5Backend}>
              <Component {...pageProps} />
            </DndProvider>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
