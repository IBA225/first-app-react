import React from 'react'
import 
{ BsFastForwardFill, BsSpeedometer,  BsBuildingFillAdd, BsFillPersonPlusFill , 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
           Stage Horizon 
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFastForwardFill className='icon'/>Demandes de Stages
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsSpeedometer className='icon'/> Stage Actifs
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                < BsBuildingFillAdd className='icon'/> Ajouter une entreprise 
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillPersonPlusFill className='icon'/>Ajouter un professionnel
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsMenuButtonWideFill className='icon'/> Rapports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGearFill className='icon'/> Réglages
            </a>
        </li>
    </ul>
</aside>
  )
}

export default Sidebar