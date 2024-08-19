import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/Auth';
import MenuComponent from '../../components/menu/Menu'; // Usando apenas o MenuComponent
import './CadastroDestino.css';

function CadastroDestino() {
    const { register, handleSubmit, setValue, formState } = useForm();
    const { errors, isSubmitting } = formState;
    const { user } = useAuth();

    const [entrada, setEntrada] = useState('');
    const [endereco, setEndereco] = useState({
        rua: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        latitude: '',
        longitude: ''
    });

    const lidarComMudancaEntrada = (e) => {
        setEntrada(e.target.value);
    };

    const buscarInformacoes = async () => {
        if (!entrada) {
            alert('Por favor, insira um CEP válido');
            return;
        }

        try {
            const resposta = await fetch(`https://cep.awesomeapi.com.br/json/${entrada}`);
            const dados = await resposta.json();

            if (dados && !dados.error) {
                setEndereco({
                    rua: dados.address || '',
                    complemento: dados.address_type || '',
                    bairro: dados.district || '',
                    cidade: dados.city || '',
                    estado: dados.state || '',
                    latitude: dados.lat,
                    longitude: dados.lng,
                });

                setValue('rua', dados.address || '');
                setValue('bairro', dados.district || '');
                setValue('cidade', dados.city || '');
                setValue('estado', dados.state || '');
                setValue('latitude', dados.lat);
                setValue('longitude', dados.lng);
            } else {
                alert('CEP não encontrado');
            }
        } catch (erro) {
            console.error("Erro ao buscar o CEP:", erro);
            alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
        }
    };

    async function addDestinys(dados) {
        try {
            const dadosCompletos = {
                ...dados,
                userId: user?.id,
            };

            const resposta = await fetch('http://localhost:3000/destinys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosCompletos),
            });

            if (!resposta.ok) {
                alert('Houve um erro ao cadastrar destino');
            }
        } catch (error) {
            alert('Houve um erro ao cadastrar destino');
        }
    }

    return (
        <div className="container-destino">
            <div className="container-menu">
                <MenuComponent />
            </div>
            <main className="picture-container-destino">
                <div className="form-container-destino">
                    <form onSubmit={handleSubmit(addDestinys)}>
                        <h3 className="titlle mb-3 fw-normal">Preencha todos os campos para adicionar destino!</h3>

                        <div className="form-row">
                            <div className="form-group nome">
                                <label htmlFor="nome" className="form-label">Nome do destino</label>
                                <input
                                    type="text"
                                    id="nome"
                                    className="form-control"
                                    placeholder="Digite o nome do seu destino"
                                    {...register("nome", {
                                        required: {
                                            value: true,
                                            message: "Esse campo é obrigatório",
                                        },
                                    })}
                                />
                                {errors.nome && <span className="text-danger text-sm">{errors.nome.message}</span>}
                            </div>

                            <div className="mb-3 form-group descricao">
                                <label htmlFor="descricao" className="form-label">Descrição</label>
                                <input
                                    type="text"
                                    id="descricao"
                                    className="form-control"
                                    placeholder="Descreva o local"
                                    {...register("descricao", {
                                        required: {
                                            value: true,
                                            message: "Esse campo é obrigatório",
                                        },
                                    })}
                                />
                                {errors.descricao && <span className="text-danger text-sm">{errors.descricao.message}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cep" className="form-label">CEP</label>
                                <input
                                    type="text"
                                    id="cep"
                                    className="form-control"
                                    placeholder="Digite seu CEP"
                                    value={entrada}
                                    onChange={lidarComMudancaEntrada}
                                />
                                <button type="button" onClick={buscarInformacoes} className="btn btn-primary mt-2">
                                    Buscar
                                </button>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="rua" className="form-label">Rua</label>
                                <input
                                    type="text"
                                    id="rua"
                                    className="form-control"
                                    placeholder="Rua"
                                    {...register("rua")}
                                    value={endereco.rua}
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bairro" className="form-label">Bairro</label>
                                <input
                                    type="text"
                                    id="bairro"
                                    className="form-control"
                                    placeholder="Bairro"
                                    {...register("bairro")}
                                    value={endereco.bairro}
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cidade" className="form-label">Cidade</label>
                                <input
                                    type="text"
                                    id="cidade"
                                    className="form-control"
                                    placeholder="Cidade"
                                    {...register("cidade")}
                                    value={endereco.cidade}
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="estado" className="form-label">Estado</label>
                                <input
                                    type="text"
                                    id="estado"
                                    className="form-control"
                                    placeholder="Estado"
                                    {...register("estado")}
                                    value={endereco.estado}
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="latitude" className="form-label">Latitude</label>
                                <input
                                    type="text"
                                    id="latitude"
                                    className="form-control"
                                    placeholder="Latitude"
                                    {...register("latitude")}
                                    value={endereco.latitude}
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="longitude" className="form-label">Longitude</label>
                                <input
                                    type="text"
                                    id="longitude"
                                    className="form-control"
                                    placeholder="Longitude"
                                    {...register("longitude")}
                                    value={endereco.longitude}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="btn-container">
                            <button className="btn btn-success" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Carregando...' : 'Cadastrar'}
                            </button>
                            <button type="button" className="btn btn-secondary">Atualizar</button>
                            <button type="button" className="btn btn-danger">Deletar</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CadastroDestino;
