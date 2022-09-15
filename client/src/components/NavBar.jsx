import React from 'react'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Real Chat</span>
      <div className='user'>
         <img src='https://img.freepik.com/free-photo/college-graduate-female-gown-feeling-happy-white-background_114579-49811.jpg?w=2000'alt='image'/>
         <span>John</span>
         <button>Logout</button>
      </div>

    </div>
  )
}
