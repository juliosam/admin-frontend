import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SideNav from '../components/sideNav'
import Router from 'next/router'
import {parseCookies} from 'nookies'

function MyApp({ Component, pageProps, navigation }: any) {
  // type AppProps  no funciono con navigation
  console.log(navigation)

  return (
    <div className='app'>
      <SideNav navigation={navigation}/>
      <Component {...pageProps} />
    </div>
  )
}

function redirectUser(ctx:any, location:any) {
  if(ctx.req){
    ctx.res.writeHead(302, {Location: location});
    ctx.res.end()
  } else{
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({Component, ctx}:any) => {
  let pageProps = {}
  const jwt = parseCookies(ctx).jwt

  const res = await fetch(`http://localhost:1337/api/navigations`)
  const navigation = await res.json()

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if (jwt == 'undefined' || !jwt ) {
    if (ctx.pathname === "/usersAuth") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps,
    navigation
  }
}
export default MyApp
