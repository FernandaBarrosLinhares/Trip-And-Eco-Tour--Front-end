import {Routes, Route} from "react-router-dom"
import CadastroUsuario from "../pages/cadastroUsuario/CadastroUsuario"
import Dashboard from'../pages/dashboard/Dashboard'
import Login from "../pages/login/Login"
// import { TemplatePrivateRouter } from "../templates/private-route"

function RoutesApp(){
    return(
        <>
    
        <Routes>

            {/* Rotas publicas */}
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/cadastroUsuario" element={<CadastroUsuario/>} /> 
            {/* Rotas privadas */}
            {/* <Route path="/dashboard" element={<TemplatePrivateRouter/>}> */}
            <Route path="/dashboard" element={<Dashboard />}/>
            {/* </Route> */}
           
            
         
        </Routes>
        
        
        </>
    )
}

export default RoutesApp





















