import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  container: {
    width: '100%'
  },
  overflow: {
    width: 200,
    whiteSpace: 'nowrap'
  },
}))

const Page = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant={'h5'}>Inline</Typography>
      <div className={classes.container}>
        <Box display={'inline'} p={1} m={1} bgcolor={'background.paper'}>
          inline
        </Box>
        <Box display={'inline'} p={1} m={1} bgcolor={'background.paper'}>
          inline
        </Box>
      </div>

      <Typography variant={'h5'}>Block</Typography>
      <div className={classes.container}>
        <Box component={'span'} display={'block'} p={1} m={1}>
          block
        </Box>
        <Box component={'span'} display={'block'} p={1} m={1}>
          block
        </Box>
      </div>

      <Typography variant={'h5'}>Hiding elements</Typography>
      <div className={classes.container}>
        <Box display={{ xs: 'block', md: 'none' }} m={1}>
          hide on screens wider than md
        </Box>
        <Box display={{ xs: 'none', md: 'block' }} m={1}>
          hide on screens smaller than md
        </Box>
      </div>

      <Typography variant={'h5'}>Display in print</Typography>
      <div className={classes.container}>
        <Box display={'block'} displayPrint={'none'} m={1}>
          screen Only (Hide on print only)
        </Box>
        <Box display={'none'} displayPrint={'block'} m={1}>
          Print Only (Hide on screen only)
        </Box>
      </div>

      <Typography variant={'h5'}>Overflow</Typography>
      <div className={classes.overflow}>
        <Box my={2} overflow={'hidden'} bgcolor={'background.paper'}>
          Overflow Hidden. Overflow Hidden. Overflow Hidden.
        </Box>
        <Box my={2} overflow={'auto'} bgcolor={'background.paper'}>
          Overflow Auto. Overflow Auto. Overflow Auto.
        </Box>
      </div>

      <Typography variant={'h5'}>Text Overflow</Typography>
      <div className={classes.overflow}>
        <Box my={2} bgcolor={'background.paper'} overflow='hidden' textOverflow='clip'>
          Text Overflow Clip. Text Overflow Clip.
        </Box>
        <Box my={2} bgcolor={'background.paper'} overflow='hidden' textOverflow='ellipsis'>
          Text Overflow Ellipsis. Text Overflow Ellipsis
        </Box>
      </div>

      <Typography variant={'h5'}>Visibility</Typography>
      <div className={classes.container}>
        <Box component='span' visibility='visible' p={1} m={1} bgcolor='background.paper'>
          Visibility Visible
        </Box>
        <Box component='span' visibility='hidden' p={1} m={1} bgcolor='background.paper'>
          Visibility Hidden
        </Box>
        <Box component='span' visibility='visible' p={1} m={1} bgcolor='background.paper'>
          Visibility Visible
        </Box>
      </div>

      <Typography variant={'h5'}>White Space</Typography>
      <div style={{ width: 200 }}>
        <Box whiteSpace={'nowrap'}>
          White Space Nowrap. White Space Nowrap.
        </Box>
        <Box whiteSpace={'normal'}>
          White Space Normal. White Space Normal.
        </Box>
      </div>
    </React.Fragment>
  )
}

export default Page