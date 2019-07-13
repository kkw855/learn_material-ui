import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Checkbox from '@material-ui/core/Checkbox'
import { orange } from '@material-ui/core/colors'
import { green } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core'

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500]
    }
  }
})

const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500]
    }
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger
    },
  },
  checked: {}
}))

function CustomCheckbox() {
  const classes = useStyles()

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked
      }}
    />
  )
}

const Page = () => {
  return (
    <React.Fragment>
      <Typography variant={'h5'}>Custom variables</Typography>
      <CustomCheckbox />

      <Typography variant={'h5'}>Nesting the theme</Typography>
      <ThemeProvider theme={outerTheme}>
        <Checkbox defaultChecked />
        <ThemeProvider theme={innerTheme}>
          <Checkbox defaultChecked />
        </ThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Page