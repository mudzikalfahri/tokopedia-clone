import Router from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
Router.events.on('routeChangeStart', 
() => NProgress.start()); 
Router.events.on('routeChangeComplete', 
() => NProgress.done()); 
Router.events.on('routeChangeError', 
() => NProgress.done());
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
