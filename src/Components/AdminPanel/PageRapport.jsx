import React,{useState} from 'react';
import Sidebar from './Sidebar'
import Header from './Header'
function PageRapport() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => { setOpenSidebarToggle(!openSidebarToggle)}
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <main className='main-container'  style={{backgroundColor: "white", width: "100%", color: "black"}}>





    </main>
    </div>
  )
}

export default PageRapport