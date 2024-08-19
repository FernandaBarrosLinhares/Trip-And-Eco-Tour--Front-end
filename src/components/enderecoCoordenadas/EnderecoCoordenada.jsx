// import { useState } from "react";
// import './Endereco.css';

// const EnderecoCoordenada = ({ definirValor }) => {
//   const [entrada, setEntrada] = useState('');
//   const [endereco, setEndereco] = useState({
//     rua: '',
//     complemento: '',
//     bairro: '',
//     cidade: '',
//     estado: '',
//     latitude: '',
//     longitude: ''
//   });

//   const lidarComMudancaEntrada = (e) => {
//     setEntrada(e.target.value);
//   };

//   const buscarInformacoes = async () => {
//     if (!entrada) {
//       alert('Por favor, insira um CEP válido');
//       return;
//     }

//     try {
//       const resposta = await fetch(`https://cep.awesomeapi.com.br/json/${entrada}`);
//       const dados = await resposta.json();

//       if (dados && !dados.error) {
//         setEndereco({
//           rua: dados.address || '',
//           complemento: dados.address_type || '',
//           bairro: dados.district || '',
//           cidade: dados.city || '',
//           estado: dados.state || '',
//           latitude: dados.lat,
//           longitude: dados.lng,
//         });
//         definirValor && definirValor('latitude', dados.lat);
//         definirValor && definirValor('longitude', dados.lng);
//       } else {
//         alert('CEP não encontrado');
//       }
//     } catch (erro) {
//       console.error("Erro ao buscar o CEP:", erro);
//       alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
//     }
//   };

//   return (
//     <div className='form-row'>
//       <div className="mb-3 form-group">
//         <label htmlFor="entrada" className="form-label">CEP</label>
//         <input
//           type="text"
//           id="entrada"
//           className="form-control"
//           placeholder="Digite seu CEP"
//           value={entrada}
//           onChange={lidarComMudancaEntrada}
//         />
//         <button type="button" onClick={buscarInformacoes} className="btn btn-primary mt-2">
//           Buscar
//         </button>
//       </div>

//       <div className="mb-3 form-group">
//         <label htmlFor="rua" className="form-label">Rua</label>
//         <input
//           type="text"
//           id="rua"
//           className="form-control"
//           placeholder="Rua"
//           value={endereco.rua || ''}
//           readOnly
//         />
//       </div>
//       <div className="mb-3 form-group">
//         <label htmlFor="complemento" className="form-label">Complemento</label>
//         <input
//           type="text"
//           id="complemento"
//           className="form-control"
//           placeholder="Complemento"
//           value={endereco.complemento || ''}
//           readOnly
//         />
//       </div>
//       <div className="mb-3 form-group">
//         <label htmlFor="bairro" className="form-label">Bairro</label>
//         <input
//           type="text"
//           id="bairro"
//           className="form-control"
//           placeholder="Bairro"
//           value={endereco.bairro || ''}
//           readOnly
//         />
//       </div>
//       <div className="mb-3 form-group">
//         <label htmlFor="cidade" className="form-label">Cidade</label>
//         <input
//           type="text"
//           id="cidade"
//           className="form-control"
//           placeholder="Cidade"
//           value={endereco.cidade || ''}
//           readOnly
//         />
//       </div>
//       <div className="mb-3 form-group">
//         <label htmlFor="estado" className="form-label">Estado</label>
//         <input
//           type="text"
//           id="estado"
//           className="form-control"
//           placeholder="Estado"
//           value={endereco.estado || ''}
//           readOnly
//         />
//       </div>
//       <div className="mb-3 form-group">
//         <label htmlFor="latitude" className="form-label">Latitude</label>
//         <input
//           type="text"
//           id="latitude"
//           className="form-control"
//           placeholder="Latitude"
//           value={endereco.latitude || ''}
//           readOnly
//         />
//       </div>
//       <div className="mb-3 form-group">
//         <label htmlFor="longitude" className="form-label">Longitude</label>
//         <input
//           type="text"
//           id="longitude"
//           className="form-control"
//           placeholder="Longitude"
//           value={endereco.longitude || ''}
//           readOnly
//         />
//       </div>
//     </div>
//   );
// };

// export default EnderecoCoordenada;
