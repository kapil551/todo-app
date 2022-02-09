import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Dashboard = () => {
  return (
    <main className='flex-grow flex flex-row w-screen'>
      {/* left sction */}
     <LeftSection />

      {/* right section */}
      <RightSection />
    </main>
  )
}

export default Dashboard