import React from 'react'
import MyButtonBase from '../../modules/components/MyButtonBase'

const Page = () => {
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef()

  return (
    <MyButtonBase ref={ref}>
      ButtonBase
    </MyButtonBase>
  )
}

export default Page