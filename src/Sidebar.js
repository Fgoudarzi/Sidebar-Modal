import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
      <div className="sidebar-header">
        <img className='logo' src={logo} />
        <button className="close-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}> <FaTimes /></button>
      </div>
      <ul className='links'>
        {links.map(link => {
          const { id, url, icon, text } = link
          return (
            <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>)
        })}
      </ul>
      <ul className='social-icons'>
        {social.map(singleSocial => {
          const { id, url, icon } = singleSocial
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>)
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
