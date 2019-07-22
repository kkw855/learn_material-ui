import React from 'react'
import calc, { IProduct } from '../../modules/typescript/ch1/utils'
import exponentiation, { logText } from '../../modules/typescript/ch1/future'
import {Typography} from '@material-ui/core'

function Page() {
  const product: IProduct = {
    name: 'Toy',
    unitPrice: 1200
  }

  return (
    <React.Fragment>
      <Typography variant={'h5'}>
        타입스크립트 CH 1
      </Typography>
      <Typography component={'div'} variant={'body1'}>
        <div>
          {calc(product, 10, 0.2) + '원'}
        </div>
        <div>
          exponentiation: {exponentiation(3, 2)}
          {logText('logging')}
        </div>
      </Typography>
    </React.Fragment>
  )
}

export default Page