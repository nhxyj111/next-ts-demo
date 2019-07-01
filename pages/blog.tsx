import Layout from "../components/Layout"
import Link from 'next/link'

const PostLink: React.SFC<{ title: string, slug: string }> = ({ title, slug }) => (
  <li><Link as={slug} href={`/post?title=${title}`}><a>{title}</a></Link></li>
)

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="react post" />
      <PostLink slug="angular-post" title="angular post" />
      <PostLink slug="vue-post" title="vue post" />
    </ul>
  </Layout>
)

export default Blog