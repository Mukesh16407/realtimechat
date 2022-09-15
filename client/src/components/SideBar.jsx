import React from 'react'
import { Chats } from './Chats'
import { NavBar } from './NavBar'
import { Search } from './Search'

export const SideBar = () => {
  return (
    <div className="sidebar">
        <NavBar/>
        <Search/>
        <Chats/>
    </div>
  )
}
