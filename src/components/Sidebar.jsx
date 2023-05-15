import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'

const Sidebar = () => {
  return (
    <div className='sidebar' style={{ backdropFilter: 'blur(10px)' }}>
      <div className='sidebar__content'>
        <Navbar />
        <Search />
        <Chats />
      </div>
    </div>
  )
}

export default Sidebar
