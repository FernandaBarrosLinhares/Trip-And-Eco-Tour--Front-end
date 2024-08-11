import { useForm } from 'react-hook-form';
import Endereco from '../../components/endereco/Endereco';
import CoordenadasGeograficas from '../../components/CoordenadaGeografica';
import './CadastroDestino.css';

function CadastroDestino() {
   
    const { register, handleSubmit, setValue, formState } = useForm();
    const { errors, isSubmitting } = formState;

   

    async function addDestinys(dados) {
        try {
            const resposta = await fetch('http://localhost:3000/destinys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            if (!resposta.ok) {
                alert('Houve um erro ao cadastrar destino');
            }
        } catch (error) {
            alert('Houve um erro ao cadastrar destino');
        }
    }

    return (
        <>
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
                                <label htmlFor="localizacao" className="form-label">Localização</label>
                                <input
                                    type="text"
                                    id="localizacao"
                                    className="form-control"
                                    placeholder="Insira uma localização"
                                    {...register("localizacao", {
                                        required: {
                                            value: true,
                                            message: "Esse campo é obrigatório",
                                        },
                                    })}
                                />
                                {errors.localizacao && <span className="text-danger text-sm">{errors.localizacaomessage}</span>}
                            </div>

                            <Endereco/>

                            <CoordenadasGeograficas register={register} setValue={setValue} />
                        </div>

                        <button className="btn btn-success" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Carregando...' : 'Cadastrar'}
                        </button>
                        <button type="button" className="btn btn-secondary">Atualizar</button>
                        <button type="button" className="btn btn-danger">Deletar</button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default CadastroDestino;
