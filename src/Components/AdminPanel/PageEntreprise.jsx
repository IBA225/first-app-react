import React,{useState} from 'react';
import Sidebar from './Sidebar'
import Header from './Header'
function PageEntreprise() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => { setOpenSidebarToggle(!openSidebarToggle)}
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <main className='main-container'  style={{backgroundColor: "white", width: "100%", color: "black"}}>

    <h1>Ajouter une entreprise</h1>
  <form action="traitement.php" method="POST">

    <div class="row col-md-6 form-group">
      <label for="nomSociete">Nom de la société :</label>
      <input type="text" id="nomSociete" name="nomSociete" class="form-control" required/>
    </div>

    <div class="row col-md-6 form-group">
      <label for="adresse">Adresse :</label>
      <input type="text" id="adresse" name="adresse" class="form-control" required/>
    </div>

    <div class="row col-md-6 form-group">
      <label for="email">Email :</label>
      <input type="email" id="email" name="email" class="form-control" required/>
    </div>

    <div class="row col-md-6 form-group">
      <label for="telephone">Téléphone :</label>
      <input type="tel" id="telephone" name="telephone" pattern="[0-9]{10}" class="form-control" required/>
      <small>Format : 10 chiffres sans espaces ni caractères spéciaux</small>
    </div>
    <button type="submit">Ajouter</button>
  </form>



    </main>
    </div>
  )
}

export default PageEntreprise