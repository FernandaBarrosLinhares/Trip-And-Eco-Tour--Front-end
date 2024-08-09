import { Outlet , Navigate} from "react-router-dom";
import { useAuth } from '../context/Auth'
import Menu from '../components/menu/Menu'




export function TemplatePrivateRouter(){
    
    const {user}= useAuth()

    return user ?(
        <div>
            <Menu/>
            <main>
                <Outlet/>
            </main>
        </div>
    ): <Navigate to ='/Login'/>
}