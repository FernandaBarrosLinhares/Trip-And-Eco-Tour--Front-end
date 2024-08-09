import {Routes, Route} from "react-router-dom"
import CadastroUsuario from "../pages/cadastroUsuario/CadastroUsuario"
import CadastroDestino from "../pages/cadastroDestino/CadastroDestino"
import Dashboard from'../pages/dashboard/Dashboard'
import { TemplatePrivateRouter } from "../templates/private.route"


import Login from "../pages/login/Login"


function RoutesApp(){
    return(
        <>
    
        <Routes>

            {/* Rotas publicas */}
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/cadastroUsuario" element={<CadastroUsuario/>} /> 


            <Route path="/dashboard" element={<TemplatePrivateRouter/>}>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Route>

            <Route path="/cadastroDestino" element={<CadastroDestino/>} />
           
            

         
        </Routes>
        
        
        </>
    )
}

export default RoutesApp





















