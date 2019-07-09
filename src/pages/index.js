import React from 'react'
import Link from 'next/link'

const HomePage = () => (
  <div>
    <Link href='/button'>
      <button>Go to Button Page</button>
    </Link>
  </div>
)

export default HomePage