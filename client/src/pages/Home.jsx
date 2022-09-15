import React from 'react'
import { Chat } from '../components/Chat'
import { SideBar } from '../components/SideBar'

export const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <SideBar/>
            <Chat/>
        </div>
    </div>
  )
}
