import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: '100%'
  }
}))

const Display = (
  <React.Fragment>
    <Typography variant={'h5'}>display</Typography>
    <div style={{ width: '100%' }}>
      <Box display={'flex'} p={1} bgcolor={'background.paper'}>
        {'I\' a flexbox container!'}
      </Box>
    </div>
  </React.Fragment>
)

const FlexDirection = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography variant={'h5'}>flex-direction</Typography>
      <div className={classes.fullWidth}>
        <Box display={'flex'} flexDirection={'row'} m={1} p={1} bgcolor={'background.paper'}>
          <Box p={1} bgcolor={'grey.300'}>
            Item 1
          </Box>
          <Box p={1} bgcolor={'grey.300'}>
            Item 2
          </Box>
          <Box p={1} bgcolor={'grey.300'}>
            Item 3
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'row-reverse'} m={1} p={1} bgcolor={'background.paper'}>
          <Box p={1} bgcolor={'grey.300'}>
            Item 1
          </Box>
          <Box p={1} bgcolor={'grey.300'}>
            Item 2
          </Box>
          <Box p={1} bgcolor={'grey.300'}>
            Item 3
          </Box>
        </Box>
      </div>
    </React.Fragment>
  )
}

const Page = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {Display}
      <FlexDirection />


      <Typography variant={'h5'}>flex-wrap</Typography>
      <div className={classes.fullWidth}>
        <Box
          display='flex'
          flexWrap='nowrap'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ maxWidth: 300 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ maxWidth: 300 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
        </Box>
      </div>

      <Typography variant={'h5'}>justify-content</Typography>
      <div className={classes.fullWidth}>
        <Box display='flex' justifyContent='flex-start' m={1} p={1} bgcolor='background.paper'>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
        <Box display='flex' justifyContent='center' m={1} p={1} bgcolor='background.paper'>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
        <Box display='flex' justifyContent='flex-end' m={1} p={1} bgcolor='background.paper'>
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
      </div>

      <Typography variant={'h5'}>align-items</Typography>
      <div className={classes.fullWidth}>
        <Box
          display='flex'
          alignItems='flex-start'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ height: 100 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ height: 100 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
        <Box
          display='flex'
          alignItems='flex-end'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ height: 100 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
      </div>

      <Typography variant={'h5'}>align-content</Typography>
      <div className={classes.fullWidth}>
        <Box
          display='flex'
          flexWrap='wrap'
          alignContent='flex-start'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ maxWidth: 300, height: 200 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 4
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 5
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 6
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 7
          </Box>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'
          alignContent='center'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ maxWidth: 300, height: 200 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 4
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 5
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 6
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 7
          </Box>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'
          alignContent='flex-end'
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ maxWidth: 300, height: 200 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 4
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 5
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 6
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 7
          </Box>
        </Box>
      </div>

      <Typography variant={'h5'}>order</Typography>
      <div className={classes.fullWidth}>
        <Box
          display='flex'
          p={1}
          m={1}
          bgcolor='background.paper'
        >
          <Box order={2} p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box order={3} p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box order={1} p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
      </div>

      <Typography variant={'h5'}>flex-grow</Typography>
      <div className={classes.fullWidth}>
        <Box
          display='flex'
          p={1}
          m={1}
          bgcolor='background.paper'
        >
          <Box flexGrow={1} p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
      </div>

      <Typography variant={'h5'}>flex-shrink</Typography>
      <div className={classes.fullWidth}>
        <Box
          display='flex'
          p={1}
          m={1}
          bgcolor='background.paper'
        >
          <Box width={'100%'} p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box flexShrink={1} p={1} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box flexShrink={0} p={1} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
      </div>

      <Typography variant={'h5'}>align-self</Typography>
      <div className={classes.fullWidth}>
        <Box
          display='flex'
          alignItems={'flex-start'}
          p={1}
          m={1}
          bgcolor='background.paper'
          css={{ height: 100 }}
        >
          <Box p={1} bgcolor='grey.300'>
            Item 1
          </Box>
          <Box p={1} alignSelf={'center'} bgcolor='grey.300'>
            Item 2
          </Box>
          <Box p={1} alignSelf={'flex-end'} bgcolor='grey.300'>
            Item 3
          </Box>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default Page