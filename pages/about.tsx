import Link from 'next/link'
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About">
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A JavaScript programmer</p>
    <img src="/static/javascript-logo.png" alt="JavaScript" />
  </Layout>
)

export default About