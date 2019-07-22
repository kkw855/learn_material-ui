import React from 'react'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Page = () => {
  return (
    <React.Fragment>
      <Typography variant={'h5'}>Fluid</Typography>
      <Container maxWidth={'md'}>
        <Box bgcolor={'#cfe8fc'} height={100}>
          maxWidth
        </Box>
      </Container>
      <Container fixed maxWidth={'md'}>
        <Box bgcolor={'secondary.main'} height={100}>
          fixed
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Page