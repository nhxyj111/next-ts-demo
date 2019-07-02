import { useEffect, useState } from "react";
import { getUserProfile, authInitialProps } from "../lib/auth";
import Layout from "../components/Layout";

const Profile: React.FC<{ auth: any }> = ({ auth }) => {
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    getUserProfile().then(u => setUser(u))
  }, [])

  return <Layout title="Profile" auth={auth}><pre>{JSON.stringify(user, null, 2)}</pre></Layout>
}

// @ts-ignore
Profile.getInitialProps = authInitialProps(true)

export default Profile