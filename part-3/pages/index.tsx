import Layout from "../components/Layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";

const Index: React.SFC<{ auth: any }> = ({ auth }) => <Layout title="Home" auth={auth}>
  <Link href='/profile'><a>Go to profile</a></Link>
</Layout>


// @ts-ignore
Index.getInitialProps = authInitialProps()

export default Index