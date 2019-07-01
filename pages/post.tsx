import Layout from "../components/Layout";

const Post: React.SFC<{ url: any }> = ({ url }) => (
  <Layout title={url.query.title}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum harum assumenda tempora beatae minima consequuntur aliquam eligendi doloremque optio dolorem architecto facilis. Ut, vero est nobis doloremque quae blanditiis?</p>
  </Layout>
)

export default Post