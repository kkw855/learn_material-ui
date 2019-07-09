import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'green',
    margin: theme.spacing(1),
  }
}))

const Page = () => {
  const classes = useStyles()

  return (
    <div>
      <Button variant='contained' className={classes.button}>버튼</Button>
    </div>
  )
}

export default Page