import {Routes, Route} from "react-router-dom"
import CadastroUsuario from "../pages/cadastroUsuario/CadastroUsuario"
import CadastroDestino from "../pages/cadastroDestino/CadastroDestino"
import ListagemDestino from "../pages/listagemDestino/ListagemDestino"
import Dashboard from'../pages/dashboard/Dashboard'

// import { TemplatePrivateRouter } from "../templates/private.route"


import Login from "../pages/login/Login"


function RoutesApp(){
    return(
        <>
    
        <Routes>

            {/* Rotas publicas */}
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/cadastrousuario" element={<CadastroUsuario/>} /> 


             {/* Rotas privadas */}

             {/* <Route element={<TemplatePrivateRouter/>}>
             <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/cadastrodestino" element={<CadastroDestino />} /> 
                    <Route path="/dashboard/listagemdestino" element={<ListagemDestino />} /> 
            </Route> */}
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cadastrodestino" element={<CadastroDestino />} />
            <Route path="/listagemdestino" element={<ListagemDestino />} />


       

         
        </Routes>
        
        
        </>
    )
}

export default RoutesApp





















