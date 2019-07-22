import React from 'react'
import { loadCSS } from 'fg-loadcss'
import App, { Container } from 'next/app'
import NextHead from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

// Add the strict mode back once the number of warnings is manageable.
// We might miss important warnings by keeping the strict mode 🌊🌊🌊.
console.log(`process.env.USE_STRICT_MODE=${process.env.USE_STRICT_MODE}`)
const ReactMode = process.env.USE_STRICT_MODE ? React.StrictMode : React.Fragment

let dependenciesLoaded = false

function loadDependencies() {
  if (dependenciesLoaded) {
    return
  }

  console.log('App loadDependencies()')

  dependenciesLoaded = true

  const fontIcons = loadCSS(
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    document.querySelector('#material-icon-font'),
  )
  fontIcons.onloadcssdefined(() => console.log('material-icon-font has loaded.'))

  loadCSS(
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    document.querySelector('#roboto-font')
  )
}

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    console.log('App getInitialProps()')
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  // only client side
  componentDidMount() {
    loadDependencies()

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    console.log('App render()')
    const {Component, pageProps} = this.props

    return (
      <ReactMode>
        <Container>
          <NextHead>
            <title>Learning Material-UI</title>
          </NextHead>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </ReactMode>
    )
  }
}

export default MyApp