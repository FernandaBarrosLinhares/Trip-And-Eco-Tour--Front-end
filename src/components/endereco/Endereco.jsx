
import { useState, useEffect } from "react";
import './Endereco.css'


const EnderecoComponent = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  });

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => response.json())
        .then((data) => {
          setEndereco({
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf
          });
        })
        .catch((error) => console.error("Erro ao buscar o CEP:", error));
    }
  }, [cep]);

  const handleChangeCep = (e) => {
    setCep(e.target.value);
  };

  return (
    <div className='form-row'>
      <div className="mb-3 form-group cep">
        <label htmlFor="cep" className="form-label">CEP</label>
        <input
          type="text"
          id="cep"
          className="form-control"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={handleChangeCep}
        />
      </div>
      <div className="mb-3 form-group rua">
        <label htmlFor="logradouro" className="form-label">Rua</label>
        <input
          type="text"
          id="logradouro"
          className="form-control"
          placeholder="Rua"
          value={endereco.logradouro}
          readOnly
        />
      </div>
      <div className="mb-3 form-group numero">
        <label htmlFor="numero" className="form-label">Número</label>
        <input
          type="text"
          id="numero"
          className="form-control"
          placeholder="Número"
        />
      </div>

      <div className="mb-3 form-group bairro">
        <label htmlFor="bairro" className="form-label">Bairro</label>
        <input
          type="text"
          id="bairro"
          className="form-control"
          placeholder="Bairro"
          value={endereco.bairro}
          readOnly
        />
      </div>
      <div className="mb-3 form-group cidade">
        <label htmlFor="cidade" className="form-label">Cidade</label>
        <input
          type="text"
          id="cidade"
          className="form-control"
          placeholder="Cidade"
          value={endereco.localidade}
          readOnly
        />
      </div>
      <div className="mb-3 form-group estado">
        <label htmlFor="estado" className="form-label">Estado</label>
        <input
          type="text"
          id="estado"
          className="form-control"
          placeholder="Estado"
          value={endereco.uf}
          readOnly
        />
      </div>
    </div>
  );
};

export default EnderecoComponent;
