import {Link} from "react-router-dom"
import './Menu.css'


function MenuComponent(){
   return(
       <>
       <div className="sidebar">
           {/* <h1>Trip And</h1><h1> Eco Tour</h1> */}
           <img 
                        className="mb-4 logo" 
                        src="https://http2.mlstatic.com/D_NQ_NP_813708-MLU70381945405_072023-O.webp" 
                        alt="Trip and eco tour"  
                        height="150"
                        width="200" 
                    />
           
           <Link to='/dashboard'><button type="button" className="btn btn-outline-secondary">Dashboard/ Home</button></Link>
           <Link to='/cadastrodestino'><button type="button" className="btn btn-outline-secondary">Cadastro Destinos</button></Link>
           <Link to='/listagemdestino'><button type="button" className="btn btn-outline-secondary">Listagem Destinos</button></Link>
         

           <Link to='/login'><button type="button" className="btn btn-outline-danger">Sair</button></Link>
          

       </div>
       </>
   )
}

export default MenuComponent