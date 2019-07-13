import React from 'react'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { blue } from '@material-ui/core/colors'
import Checkbox from '@material-ui/core/Checkbox'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const paletteTheme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  }
})

const Page = () => {
  return (
    <ThemeProvider theme={paletteTheme}>
      <Typography variant={'h5'}>Using a color object</Typography>
      <Checkbox defaultChecked color={'primary'} />
      <Checkbox defaultChecked color={'secondary'} />
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
    </ThemeProvider>
  )
}

export default Page