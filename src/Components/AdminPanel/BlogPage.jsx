import React,{useState} from 'react';
import Sidebar from './Sidebar'
import Header from './Header'

function BlogPage() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <main className='main-container'  style={{backgroundColor: "white", width: "100%", color: "black"}}>
      <div className='main-title'>
        {/* ------- Debut page ------- */}
          <h3>Demandes de Stages</h3>


        {/* ------- Fin page ------- */} 
      </div>

      
  </main>
  </div>
  )
}

export default BlogPage