// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('Document getInitialProps()')
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    console.log('Document render()')

    return (
      <Html>
        <Head>
          {/* Use minimum-scale=1 to enable GPU rasterization. */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <style id="material-icon-font" />
          <title>Learning Material-UI</title>
        </Head>
        <body className="custom_class">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument