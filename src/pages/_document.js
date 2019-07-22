// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('Document getInitialProps()')
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    let css = sheets.toString()

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
      )
    }
  }

  render() {
    console.log('Document render()')

    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization. */}
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          <style id='material-icon-font' />
          <style id='roboto-font' />
        </Head>
        <body className='custom_class'>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument