import Layout from "../components/Layout";

const Error: React.SFC<{ statusCode?: number }> = ({ statusCode }) => (
  <Layout title="Error!!!">
    <p>
      {statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Couldn't get that page, sorry!`}
    </p>
  </Layout>
)

export default Error