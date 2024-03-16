import React,{useState} from 'react';
import Sidebar from './Sidebar'
import Header from './Header'

function Page2() {
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
          <h3>Page2</h3>



        {/* ------- Fin page ------- */} 
      </div>

      
  </main>
  </div>
  )
}

export default Page2