
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch'
import Error from './_error'
// import React, { useEffect, useState } from 'react';

const About: React.FC<{ user: any, statusCode: number }> = ({ user, statusCode }) => {
  // const [user, setUser] = useState<any>()

  // useEffect(() => {
  //   fetch('https://api.github.com/users/reedbarger')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setUser(data)
  //     })
  // }, [])

  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <Layout title="About">
      {/* {JSON.stringify(user)}
      <h1>About</h1>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
      <p>A JavaScript programmer</p>
      <img src="/static/javascript-logo.png" alt="JavaScript" />*/}
      <p>{user.name}</p>
      <img src={user.avatar_url} alt="Me" height="200px" />
    </Layout>
  )
}

// class About extends React.Component<any, any> {
//   render() {
//     return <div>ddd</div>
//   }
// }

// @ts-ignore
About.getInitialProps = async () => {
  // fetch('https://api.github.com/users/reedbarger')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  const res = await fetch('https://api.github.com/users/reedbarger')
  const statusCode = res.status > 200 ? res.status : false
  const data = await res.json()
  return { user: data, statusCode }
}

export default About
