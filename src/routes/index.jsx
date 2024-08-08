import {Routes, Route, BrowserRouter} from "react-router-dom"
import CadastroUsuario from "../pages/cadastroUsuario/CadastroUsuario"
import CadastroDestino from "../pages/cadastroDestino/CadastroDestino"
import Login from "../pages/login/Login"


function RoutesApp(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/cadastroUsuario" element={<CadastroUsuario/>} /> 
            <Route path="/cadastroDestino" element={<CadastroDestino/>} />
         
        </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default RoutesApp























