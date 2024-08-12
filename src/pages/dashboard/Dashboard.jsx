import MenuComponent from '../../components/menu/Menu'

import { useAuth } from '../../context/Auth'
import { useEffect , useState} from 'react'
import './Dashboard.css'


function DashBoard(){

const {user} = useAuth();
const [locais,setLocais]=useState([]);
const [usuarios,setUsuarios]=useState([0]);



useEffect(()=>{

   async function  buscarLocais(){
    try {
        const response = await fetch('http://localhost:3000/destinys');
        if (response.ok) {
            const data = await response.json();
            setLocais(data);
        } else {
            console.error('Erro ao buscar locais');
        }
    } catch (error) {
        console.error('Erro ao buscar locais', error);
    }
   }

   async function buscarUsuarios() {
    try {
        const response = await fetch('http://localhost:3000/users'); 
        if (response.ok) {
            const data = await response.json();
            setUsuarios(data.length); 
        } else {
            console.error('Erro ao buscar usuários');
        }
    } catch (error) {
        console.error('Erro ao buscar usuários', error);
    }
}
   buscarLocais();
   buscarUsuarios();
    }, []);




    return( 
        <>
        <div className='container-dashboard'>
            <div className= 'container-menu'>
                <MenuComponent/>
            </div>
            <main className='container-main'>
                <div className='container-cards'>
                    <div className="card-user">
                            <span>Usuários</span>
                            <span>{usuarios}</span>
                            <img src='' />
                    </div>
                    <div className="card-destiny">
                            <span>Destinos</span>
                            <span>{locais.length}</span>
                            <img src='' />
                    </div>
                
          </div>
          <div className='containerTableandMap'>
            <div className='header-container'>
                
           
            </div>
            <table>
                            <thead>
                                <tr>
                                    <th>Local</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locais.map((local, index) => (
                                    <tr key={index}>
                                        <th>{local.nome}</th>
                                        <th>{local.latitude}</th>
                                        <th>{local.longitude}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="map-container">
                            {/* mapa */}
                        </div>
            </main>

        </div> 
         

         
        

        </>
    )
}

export default DashBoard
