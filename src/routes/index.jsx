import {Routes, Route} from "react-router-dom"
import CadastroUsuario from "../pages/cadastroUsuario/CadastroUsuario"
import CadastroDestino from "../pages/cadastroDestino/CadastroDestino"

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

            <Route path="/cadastroDestino" element={<CadastroDestino/>} /
           
            

         
        </Routes>
        
        
        </>
    )
}

export default RoutesApp





















