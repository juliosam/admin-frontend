import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SideNav from '../components/sideNav'
import Router from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='app'>
      <SideNav/>
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
  const jwt = true
  //parseCookies(ctx).jwt

  const res = await fetch(`http://localhost:1337/api/navigations`)
  const navigation = await res.json()

  if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
  }

  if (!jwt) {
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
