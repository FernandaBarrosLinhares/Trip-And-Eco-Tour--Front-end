import { Outlet , Navigate} from "react-router-dom";
import { useAuth } from '../context/Auth'





export function TemplatePrivateRouter(){
    
    const {user}= useAuth()

    return user ?(
        <div>
          
            <main>
                <Outlet/>
            </main>
        </div>
    ): <Navigate to ='/Login'/>
}