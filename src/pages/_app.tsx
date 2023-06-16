import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
// import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}  >
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <ToastContainer />
      <Component {...pageProps} />
    {/* </PersistGate> */}
  </Provider>
}
export default (App);