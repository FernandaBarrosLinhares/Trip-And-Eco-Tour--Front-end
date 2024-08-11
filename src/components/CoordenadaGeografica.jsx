import  { useState } from 'react';

const CoordenadasGeograficas = ({ register, setValue }) => {
    const [localizacao, setLocalizacao] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const buscarCoordenadas = async () => {
        if (!localizacao) {
            alert('Por favor, insira uma localização válida');
            return;
        }

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(localizacao)}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if (data && data.length > 0) {
                const { lat, lon } = data[0];
                setLatitude(lat);
                setLongitude(lon);
                setValue('latitude', lat); 
                setValue('longitude', lon); 
            } else {
                alert('Endereço não encontrado');
            }
        } catch (error) {
            console.error('Erro ao buscar coordenadas:', error);
            alert('Erro ao buscar coordenadas. Tente novamente mais tarde.');
        }
    };

    const handleLocalizacaoChange = (e) => {
        setLocalizacao(e.target.value);
    };

    return (
        <div>
            <div className="form-group">
                <label htmlFor="localizacao" className="form-label">Localização</label>
                <input
                    type="text"
                    id="localizacao"
                    value={localizacao}
                    onChange={handleLocalizacaoChange}
                    className="form-control"
                    placeholder="Digite a localização"
                    required
                />
                <button type="button" onClick={buscarCoordenadas} className="btn btn-primary mt-2">
                    Buscar Coordenadas
                </button>
            </div>

            <div className="form-group">
                <label htmlFor="latitude" className="form-label">Latitude</label>
                <input
                    type="text"
                    id="latitude"
                    value={latitude}
                    readOnly
                    className="latitude form-control"
                    {...register('latitude')}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="longitude" className="form-label">Longitude</label>
                <input
                    type="text"
                    id="longitude"
                    value={longitude}
                    readOnly
                    className="longitude form-control"
                    {...register('longitude')}
                />
            </div>
        </div>
    );
};

export default CoordenadasGeograficas;
