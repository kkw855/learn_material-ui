import React from 'react'
import App, { Container } from 'next/app'
// import { loadCSS, onloadCSS } from 'fg-loadcss/src/loadCSS'
import { loadCSS } from 'fg-loadcss'

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
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    console.log('App getInitialProps()')
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    loadDependencies()
  }

  render() {
    console.log('App render()')
    const { Component, pageProps } = this.props

    return (
      <ReactMode>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ReactMode>
    )
  }
}

export default MyApp