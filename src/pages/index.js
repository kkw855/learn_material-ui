import React from 'react'
import Link from 'next/link'

const HomePage = () => (
  <div>
    <Link href='/about'>
      <button>Go to About Page</button>
    </Link>
  </div>
)

export default HomePage