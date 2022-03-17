import React from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext , useGlobalContext} from './context'

const Home = () => {
  const {isSidebarOpen , setIsSidebarOpen , setIsModalOpen , isModalOpen} = useGlobalContext()
  //console.log(data)
  return (
    <main>
      <button className='sidebar-toggle' onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
        <FaBars></FaBars>
      </button>
      <button className='btn' onClick={()=>setIsModalOpen(!isModalOpen)}>
        show modal
      </button>
    </main>
  )
}

export default Home
