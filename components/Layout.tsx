import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()



const Layout: React.SFC<{ title: string }> = ({ children }) => (
  <div className="root">
    <Head>
      <title>Next Portfolio</title>
    </Head>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hireme"><a>Hire Me</a></Link>
    </header>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>

    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      footer {
        padding: 1em;
      }
    `}</style>

    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
)

export default Layout