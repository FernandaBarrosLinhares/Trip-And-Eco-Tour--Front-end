import { useState, useEffect } from 'react';
import MenuComponent from '../../components/menu/Menu';
import './ListagemDestino.css';
import { Link } from 'react-router-dom';

function ListagemDestinos() {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        async function buscarDestinos() {
            try {
                const response = await fetch('http://localhost:3000/destinys');
                if (response.ok) {
                    const data = await response.json();
                    setDestinos(data);
                } else {
                    console.error('Erro ao buscar destinos');
                }
            } catch (error) {
                console.error('Erro ao buscar destinos:', error);
            }
        }

        buscarDestinos();
    }, []);

    return (
        <div className="container-listagem">
            <div className="container-menu">
                <MenuComponent />
            </div>
            <div className="listagem-container">
                <h3 className="titulo-listagem">Lista de Destinos</h3>
                <table className="table-destinos">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                             <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {destinos.map((destino, index) => (
                            <tr key={index}>
                                <th>{destino.id}</th>
                                <td>{destino.nome}</td>
                                {/* <td>{destino.localizacao}</td> */}
                                <td>{destino.latitude}</td>
                                <td>{destino.longitude}</td>
                                <td>
                                    <Link to={`/cadastrodestino/${destino.id}`}><button type="button" className="btn btn-outline-success">Editar</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListagemDestinos;
