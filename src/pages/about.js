import React from 'react'
import Link from 'next/link'

const Page = () => {
  console.log('About')

  return (
    <div>
      <Link href='/'>
        <button>Go to Home Page</button>
      </Link>
    </div>
  )
}

export default Page