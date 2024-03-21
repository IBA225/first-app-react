import React from 'react'
import 
{ BsFastForwardFill, BsSpeedometer,  BsBuildingFillAdd, BsFillPersonPlusFill , 
   BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <a href="/">
                Stage Horizon
            </a>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="/BlogPage">
                <BsFastForwardFill className='icon'/>Demandes de Stages
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="/PageActifs">
                <BsSpeedometer className='icon'/> Stage Actifs
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="/PageEntreprise">
                < BsBuildingFillAdd className='icon'/> Ajouter une entreprise 
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="/PagePro">
                <BsFillPersonPlusFill className='icon'/>Ajouter un professionnel
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="/PageRapport">
                <BsMenuButtonWideFill className='icon'/> Rapports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="/PageRapport">
                <BsFillGearFill className='icon'/> Réglages
            </a>
        </li>
    </ul>
</aside>
  )
}

export default Sidebar