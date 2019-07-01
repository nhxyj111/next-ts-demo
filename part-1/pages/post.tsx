import Layout from "../components/Layout";
import { withRouter } from 'next/router'

const Post: React.SFC<{ router: any }> = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '80vw' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum harum assumenda tempora beatae minima consequuntur aliquam eligendi doloremque optio dolorem architecto facilis. Ut, vero est nobis doloremque quae blanditiis?</p>
  </Layout>
)

export default withRouter(Post)