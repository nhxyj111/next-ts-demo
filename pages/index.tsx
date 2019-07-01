import Link from 'next/link'
import Layout from '../components/Layout';

const Index = () => (
  <Layout title='Home'>
    <div>
      <h1>Home</h1>
      <Link href="/about"><a >Go to About</a></Link>
      <p>Welcome to the home page</p>
    </div>
  </Layout>
)

export default Index