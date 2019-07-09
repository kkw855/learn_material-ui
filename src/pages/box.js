import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// { Button } 포맷으로 import 하면, Box 속성이 적용안됨.
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff'
// The CSS specificity relies on the import order.
// If you want the guarantee that the wrapped component's style will be overridden,
// you need to import the Box last.
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(2),
  }
}))

const Page = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box m={1}>
        <Button variant='contained'>버튼</Button>
      </Box>
      <Box m={1} color='primary.main' clone>
        <Button variant='contained'>버튼</Button>
      </Box>
      <Box m={1} color='secondary.main' clone>
        <Button variant='contained'>버튼</Button>
      </Box>

      <Button variant={'contained'} className={classes.button}>버튼</Button>

      <Box
        color='primary.main'
        bgcolor='background.paper'
        fontFamily='h6.fontFamily'
        fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
        p={{ xs: 2, sm: 3, md: 4 }}
      >
        @material-ui/system
      </Box>

      <Box
        color={'white'}
        bgcolor={'palevioletred'}
        p={2}
      >
        JSS
      </Box>

      <Box clone pt={2} pr={1} pb={1} pl={2}>
        <Paper elevation={10}>
          <Grid container alignItems={'center'} spacing={2} wrap={'nowrap'}>
            <Grid item>
              <Box bgcolor={'primary.main'} clone>
                <Avatar>
                  <SignalWifiOffIcon />
                </Avatar>
              </Box>
            </Grid>
            <Grid item>
              <Typography>You have lost connection to the internet. This app is offline.</Typography>
            </Grid>
          </Grid>
          <Grid container justify={'flex-end'}>
            <Grid item>
              <Button color={'primary'}>Turn on wifi</Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  )
}

export default Page