import { createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const theme = createMuiTheme({
  spacing: 4,
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`,
  },
  status: {
    danger: orange[500]
  },
})

export default theme