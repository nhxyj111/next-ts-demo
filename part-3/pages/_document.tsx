import Document, { Head, Main, NextScript } from 'next/document'
import { getServerSideToken, getUserScript } from '../lib/auth';

class MyDocument extends Document<any> {
  static async getInitialProps(ctx: any) {
    const props = await Document.getInitialProps(ctx)
    const userData = await getServerSideToken(ctx.req)
    return { ...props, ...userData }
  }

  render() {
    const { user = {} } = this.props
    return (
      <html>
        <Head>
          <meta name="description" content="A site for my programming portfolio" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
          <style jsx>{`
            body {
              font-family: 'Roboto', sans-serif;
            }
          `}</style>
        </body>
      </html>
    )
  }
}

export default MyDocument