import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SideNav from '../components/sideNav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='app'>
      <SideNav/>
      <Component {...pageProps} />
    </div>
  
  )
}

export default MyApp
