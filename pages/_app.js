import styles from '../styles/global.scss';
import {StylesProvider} from '@material-ui/core';

function MyApp({Component, pageProps}) {
  return <StylesProvider injectFirst><Component {...pageProps} /></StylesProvider>;
}

export default MyApp;
