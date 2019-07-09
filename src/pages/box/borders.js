import React from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const additive = (
  <Box
    bgcolor={'background.paper'}
    m={1}
    borderColor={'text.primary'}
    width={'5rem'}
    height={'5rem'}
  />
)

const subtractive = (
  <Box
    bgcolor={'background.paper'}
    m={1}
    borderColor={'text.primary'}
    width={'5rem'}
    height={'5rem'}
    border={1}
  />
)

const borderColor = (
  <Box
    bgcolor={'background.paper'}
    m={1}
    width={'5rem'}
    height={'5rem'}
    border={1}
  />
)

const borderRadius = (
  <Box
    bgcolor={'background.paper'}
    borderColor={'text.primary'}
    m={1}
    width={'5rem'}
    height={'5rem'}
    border={1}
  />
)

const Page = () => {
  return (
    <React.Fragment>
      <Typography variant={'h5'} component={'h3'}>Additive</Typography>
      <Grid container justify={'center'} wrap={'nowrap'}>
        <Box clone border={1}>
          {additive}
        </Box>
        <Box clone borderTop={1}>
          {additive}
        </Box>
        <Box clone borderRight={1}>
          {additive}
        </Box>
        <Box clone borderBottom={1}>
          {additive}
        </Box>
        <Box clone borderLeft={5}>
          {additive}
        </Box>
      </Grid>

      <Typography variant={'h5'} component={'h3'}>Subtractive</Typography>
      <Grid container justify={'center'} wrap={'nowrap'}>
        <Box clone>
          {subtractive}
        </Box>
        <Box clone borderTop={0}>
          {subtractive}
        </Box>
        <Box clone borderRight={0}>
          {subtractive}
        </Box>
        <Box clone borderBottom={0}>
          {subtractive}
        </Box>
        <Box clone borderLeft={0}>
          {subtractive}
        </Box>
      </Grid>

      <Typography variant={'h5'} component={'h3'}>Border color</Typography>
      <Grid container justify={'center'} wrap={'nowrap'}>
        <Box clone borderColor={'primary.main'}>
          {borderColor}
        </Box>
        <Box clone borderColor={'secondary.main'}>
          {borderColor}
        </Box>
        <Box clone borderColor={'error.main'}>
          {borderColor}
        </Box>
        <Box clone borderColor={'grey.500'}>
          {borderColor}
        </Box>
        <Box clone borderColor={'text.primary'}>
          {borderColor}
        </Box>
      </Grid>

      <Typography variant={'h5'} component={'h3'}>Border-radius</Typography>
      <Grid container justify={'center'} wrap={'nowrap'}>
        <Box clone borderRadius={'50%'}>
          {borderRadius}
        </Box>
        <Box clone borderRadius={'borderRadius'}>
          {borderRadius}
        </Box>
        <Box clone borderRadius={16}>
          {borderRadius}
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default Page