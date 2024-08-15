    import { useState, useEffect } from 'react';

import MapComponent from '../../components/Mapa'; // Atualizado o caminho do import
import userIcon from '../../assets/icons8-usuário-64.png';
import marcadorIcon from '../../assets/icons8-marcador-24.png';
import MenuComponent from './../../components/menu/Menu';
import { useAuth } from '../../context/Auth';

import './Dashboard.css';

function DashBoard() {
    const { user } = useAuth();
    const [locais, setLocais] = useState([]);
    const [usuarios, setUsuarios] = useState(0);

    useEffect(() => {
        async function buscarLocais() {
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

    return (
        <>
            <div className='container-dashboard'>
                <div className='container-menu'>
                    <MenuComponent />
                </div>
                <main className='container-main'>
                    <div className='container-cards'>
                        <div className="card-user">
                            <span>Usuários</span>
                            <span>{usuarios}</span>
                            <img src={userIcon} alt="Usuário" />
                        </div>
                        <div className="card-destiny">
                            <span>Destinos</span>
                            <span>{locais.length}</span>
                            <img src={marcadorIcon} alt="Marcador" />
                        </div>
                    </div>
                    <div className='card-list'>
                        {locais.map((local, index) => (
                        <div key={index} className='card'>
                            <div className='card-info'>
                {/* <div className='info-labels'> */}
                    {/* <p><strong>Local:</strong></p>
                    <p><strong>Latitude:</strong></p>
                    <p><strong>Longitude:</strong></p> */}
                {/* </div> */}
                        <div className='info-values'>
                            <p>{local.nome}</p>
                            <p>{local.latitude}</p>
                            <p>{local.longitude}</p>
                     </div>
                 </div>
                 <div className='card-map'>
                    <MapComponent latitude={local.latitude} longitude={local.longitude} />
                </div>
                </div>
                ))}
                </div>
    
                </main>
            </div>
        </>
    );
}

export default DashBoard;
