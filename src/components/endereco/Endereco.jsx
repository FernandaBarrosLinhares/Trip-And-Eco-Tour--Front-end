// import { useState, useEffect } from "react";
// import './Endereco.css';

// const Endereco = ({register,setValue, setRua, ruaProp}) => {
//   const [cep, setCep] = useState('');
//   const [endereco, setEndereco] = useState({
//     logradouro: ruaProp ||'',
//     complemento: '',
//     bairro: '',
//     localidade: '',
//     uf: ''
//   });

//   useEffect(() => {
//     if (cep.length === 8) {
//       fetch(`https://viacep.com.br/ws/${cep}/json`)
//         .then((response) => response.json())
//         .then((data) => {
//           const logradouro = data.logradouro || '';
//           setEndereco({
//             logradouro:logradouro,
//             complemento: data.complemento || '',
//             bairro: data.bairro || '',
//             localidade: data.localidade || '',
//             uf: data.uf || ''
//           });
//           setRua(logradouro);
//           setValue('logradouro', logradouro); 
//           setValue('bairro', data.bairro || '');
//           setValue('cidade', data.localidade || '');
//           setValue('estado', data.uf || '');
//         })
//         .catch((error) => console.error("Erro ao buscar o CEP:", error));
//     }
//   }, [cep, setRua, setValue]);

//   const handleChangeCep = (e) => {
//     const newCep = e.target.value;
//     setCep(newCep);
//     setValue('cep', newCep);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEndereco(prevEndereco => ({
//       ...prevEndereco,
//       [name]: value
//     }));
//     setValue(name, value);
//       if (name === 'logradouro') {
//         setRua(value);
//     }
//   }

//   return (
//     <div className='form-row'>
//       <div className="mb-3 form-group cep">
//         <label htmlFor="cep" className="form-label">CEP</label>
//         <input
//           type="text"
//           id="cep"
//           className="form-control"
//           placeholder="Digite seu CEP"
//           value={cep}
//           onChange={handleChangeCep}
//           {...register('cep', { required: true })}
//         />
//       </div>
//       <div className="mb-3 form-group rua">
//         <label htmlFor="logradouro" className="form-label">Rua</label>
//         <input
//           type="text"
//           id="logradouro"
//           name="logradouro"
//           className="form-control"
//           placeholder="Rua"
//           value={endereco.logradouro}
//           onChange={handleInputChange}
//           {...register('logradouro',{ required: true })}
//         />
//       </div>
//       <div className="mb-3 form-group numero">
//         <label htmlFor="numero" className="form-label">Número</label>
//         <input
//           type="text"
//           id="numero"
//           name="numero"
//           className="form-control"
//           placeholder="Número"
//           onChange={handleInputChange}
//           {...register('numero', { required: true })}
//         />
//       </div>
//       <div className="mb-3 form-group bairro">
//         <label htmlFor="bairro" className="form-label">Bairro</label>
//         <input
//           type="text"
//           id="bairro"
//           name="bairro"
//           className="form-control"
//           placeholder="Bairro"
//           value={endereco.bairro}
//           onChange={handleInputChange}
//           {...register('bairro',{ required: true })}
//         />
//       </div>
//       <div className="mb-3 form-group cidade">
//         <label htmlFor="cidade" className="form-label">Cidade</label>
//         <input
//           type="text"
//           id="cidade"
//           name="cidade"
//           className="form-control"
//           placeholder="Cidade"
//           value={endereco.localidade}
//           onChange={handleInputChange}
//           {...register('cidade', { required: true })}
//         />
//       </div>
//       <div className="mb-3 form-group estado">
//         <label htmlFor="estado" className="form-label">Estado</label>
//         <input
//           type="text"
//           id="estado"
//           name="estado"
//           className="form-control"
//           placeholder="Estado"
//           value={endereco.uf}
//           onChange={handleInputChange}
//           {...register('estado', { required: true })}
//         />
//       </div>
//     </div>
//   );
// };

// export default Endereco



