import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { logoutUser } from '../lib/auth';

Router.onRouteChangeStart = url => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout: React.SFC<{ title?: string, auth?: any }> = ({ children, title, auth }) => {
  const { user = {} } = auth || {}

  return (
    <div className="root">
      <div className="navbar">
        <span>Welcome, <strong>{user.name || 'Guest'}</strong></span>

        <div>
          <Link href="/"><a>Home</a></Link>
          {user.email ? (
            <>
              <Link href="/profile"><a>Profile</a></Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : <Link href="/login"><a>Login</a></Link>}


        </div>
      </div>
      <h1>{title}</h1>
      {children}

      <style jsx>{`
      .root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .navbar {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
      a, button {
        margin-right: .5em;
      }
      button {
        text-decoration: underline;
        padding: 0;
        font: inherit;
        cursor: pointer;
        border-style: none;
        color: rgb(0, 0, 238);
      }
    `}</style>
    </div>
  )
}

export default Layout