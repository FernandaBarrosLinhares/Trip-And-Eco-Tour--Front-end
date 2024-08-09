import {Link} from "react-router-dom"
import './Menu.css'


function MenuComponent(){
   return(
       <>
       <div className="sidebar">
           <h1>Trip And</h1><h1> Eco Tour</h1>
     
           
           <Link to='/dashboard'><button type="button" className="btn btn-outline-warning">Dashboard</button></Link>
           <Link to='/cadastrodestino'><button type="button" className="btn btn-outline-warning">Cadastro Destinos</button></Link>
           <Link to='/listagemdestino'><button type="button" className="btn btn-outline-warning">Listagem Destinos</button></Link>
         

           <Link to='/login'><button type="button" className="btn btn-outline-danger">Sair</button></Link>
          

       </div>
       </>
   )
}

export default MenuComponent