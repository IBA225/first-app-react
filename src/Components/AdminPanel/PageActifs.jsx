import React,{useState} from 'react';
import Sidebar from './Sidebar'
import Header from './Header'

function PageActifs() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <main className='main-container'  style={{backgroundColor: "white", width: "100%", color: "black"}}>
      
        {/* ------- Debut page ------- */}
           <h3>Stage actifs</h3>
           
    <form action="traitement.php" method="POST">
      
        <div class="row col-md-6 form-group">
            <label for="sujet">Préciser le sujet:</label>
            <input type="text" id="sujet" name="sujet" class="form-control" required/>
        </div>

        <div class="row col-md-6 form-group">
            <label for="date_debut">Préciser la date de début:</label>
            <input type="date" id="date_debut" name="date_debut"class="form-control" required/>
        </div>

        <div class="row col-md-6 form-group">
            <label for="date_fin">Préciser la date de fin:</label>
            <input type="date" id="date_fin" name="date_fin"class="form-control" required/>
        </div>

        <div class="row col-md-6 form-group">
            <label for="encadrant_pedagogique">Ajouter un Encadrant pédagogique:</label>
            <select id="encadrant_pedagogique" name="encadrant_pedagogique" class="form-control"required>
                <option value="" disabled selected>-- Sélectionnez un encadrant pédagogique --</option>
                {/*Options à remplir avec des données existantes dans la base*/}
                <option value="encadrant1">Encadrant 1</option>
                <option value="encadrant2">Encadrant 2</option>
                <option value="encadrant3">Encadrant 3</option>
            </select>
        </div>

        <div class="row col-md-6 form-group">
            <label for="encadrant_professionnel">Ajouter un Encadrant professionnel:</label>
            <select id="encadrant_professionnel" name="encadrant_professionnel" class="form-control"required>
                <option value="" disabled selected>-- Sélectionnez un encadrant professionnel --</option>
                {/*<!-- Options à remplir avec des données existantes dans la base -->*/}
                <option value="encadrant_pro1">Encadrant Pro 1</option>
                <option value="encadrant_pro2">Encadrant Pro 2</option>
                <option value="encadrant_pro3">Encadrant Pro 3</option>
            </select>
        </div>

        <div class="row col-md-6 form-group">
            <label for="societe">Ajouter la société :</label>
            <input type="text" id="societe" name="societe" class="form-control"required/>
        </div>

        <div class="row col-md-6 form-group">
            <label for="memoire">Déposer mémoire :</label>
            <input type="file" id="memoire" name="memoire" accept=".pdf,.doc,.docx" required/>
        </div>

        <input type="submit" value="Envoyer"/>
    </form>

        

        {/* ------- Fin page ------- */} 
      

      
  </main>
  </div>
  )
}

export default PageActifs 