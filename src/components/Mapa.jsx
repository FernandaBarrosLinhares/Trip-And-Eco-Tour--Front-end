
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Mapa.css'
import 'leaflet/dist/leaflet.css';

const MapComponent = ({latitude,longitude}) => {
 

    return (
   
            <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        Localização selecionada
                    </Popup>
                </Marker>
            </MapContainer>
        
    );
};

export default MapComponent;