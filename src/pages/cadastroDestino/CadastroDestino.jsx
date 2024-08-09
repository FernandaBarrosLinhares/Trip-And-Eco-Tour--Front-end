import {useForm} from 'react-hook-form'
// import MenuComponent from "../../components/menu/MenuComponet"
import EnderecoComponent from '../../components/endereco/Endereco'
import './CadastroDestino.css'


function CadastroDestino(){
    const {register,handleSubmit,formState}= useForm()
    const { errors, isSubmitting } = formState

    async function addDestinys(dados){
        try {
            const resposta = await fetch('http://localhost:3000/destiny',{
                method:'POST',
                body: JSON.stringify(dados)
              
            })

            if(resposta.ok === false)
            alert("houve um erro ao cadastrar destino ")
            
        } catch (error) {
            alert("Houve um erro ao cadastrar usuario")
            
        }
        
    }


    return(
        <>
        
            <div >
                {/* <MenuComponent/> */}
            </div>
        
            <main className='picture-container-destino'>
            <div className="form-container-destino">
                <form onSubmit={handleSubmit(addDestinys)}>
                     <h3 className="titlle mb-3 fw-normal">Preencha todos os campos para adicionar destino!</h3>
                        <div className="form-row">
                            <div className="form-group-destino nome">        
                            <label htmlFor="nome" className="form-label">Nome do destino</label>
                            <input
                                type="text"
                                id="nome"
                                className="form-control"
                                placeholder="Digite o nome do seu destino"
                                {...register("nome", {
                                    required: {
                                        value: true,
                                        message: "Esse é obrigatório informar nome"
                                    },
                                })}
                            />
                            {errors.nome && <span className='text-danger text-sm'>{errors.nome.message}</span>}
                        </div>
                        <div className="mb-3 form-group-destino descricao">
                         <label htmlFor="exampleFormControlInput1" className="form-label-destino">Descrição </label>
                         <input
                            type="text"
                            className="form-control"
                            placeholder="Descreva o local"
                             {...register("descricao", {
                             required: {
                            value: true,
                            message: "Esse campo é obrigatório"
                        },
                    
                    })}
                />
                {errors.descricao && <span className='text-danger text-sm'>{errors.descricao.message}</span>}
            </div>
        
                    </div>

                    <div className="form-row">
                        <div className="form-group-destino">
                            <label htmlFor="localizacao" className="form-label">Localização</label>
                            <input
                                type="text"
                                id="localizacao"
                                className="form-control"
                                placeholder="Insira a localização"
                                {...register("localizacao", {
                                    required: {
                                        value: true,
                                        message: "Esse campo é obrigatório"
                                    },
                                
                                })}
                            />
                            {errors.localizacao && <span className='text-danger text-sm'>{errors.localizacaomessage}</span>}
                        </div>

                        <EnderecoComponent />


                        <div className="form-group-destino">
                            <label htmlFor="coordenadasGeograficas" className="form-label">Coordenadas Geograficas</label>
                            <input
                                type="text"
                                id="coordenadasGeograficas"
                                className="form-control"
                                placeholder="00 00 00.0, 0 00 00.0"
                                
                            />
                            
                        </div>
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
    )
}

export default CadastroDestino