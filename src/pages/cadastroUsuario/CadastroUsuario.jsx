import { useForm } from 'react-hook-form'
import EnderecoComponent from '../../components/endereco/Endereco'

import  './CadastroUsuario.css'


function CadastroUsuario(){
    const {register,handleSubmit,formState}= useForm()
    const { errors, isSubmitting } = formState

    const validateCPF = (cpf) => {
        const cpfRegex = /^\d{11}$/;
        if (!cpfRegex.test(cpf)) {
            return "O CPF deve ter 11 dígitos.";
        }
      
        return true;
    };
    const validateEmail = async (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Formato de email inválido.";
        }
        
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            return "Este email já está em uso.";
        }
    
        return true;
    };
    
    const checkEmailExists = async (email) => {
        try {
            const response = await fetch(`http://localhost:3000/usuarios?email=${email}`);
            const data = await response.json();
            return data.length > 0;
        } catch (error) {
            console.error("Erro ao verificar o email:", error);
            return false;
        }
    };
    
   
    const validateDate = (date) => {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return dateRegex.test(date) || "A data deve estar no formato DD/MM/AAAA.";
    };
    
    // async function onSubmit(dados) {
      
    //     console.log(dados)
    // }

    async function addUser(dados){
        try {
            const resposta = await fetch('http://localhost:3000/usuarios',{
                method:'POST',
                body: JSON.stringify(dados)
              
            })

            if(resposta.ok === false)
            alert("houve um erro ao cadastrar usuario ")
            
        } catch (error) {
            alert("Houve um erro ao caddastrar usuario")
            
        }
        
    }


    return(
        <>
       
        <main className='picture-container'>
            <div className="form-container">
                <form onSubmit={handleSubmit(addUser)}>
                     <h3 className="h3 mb-3 fw-normal">Preencha todos os campos para realizar seu cadastro!</h3>
                        <div className="form-row">
                            <div className="form-group nome">        
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                className="form-control"
                                placeholder="Digite seu nome"
                                {...register("nome", {
                                    required: {
                                        value: true,
                                        message: "Esse é obrigatório informar nome"
                                    },
                                })}
                            />
                            {errors.nome && <span className='text-danger text-sm'>{errors.nome.message}</span>}
                        </div>
                        <div className="mb-3 form-group email">
                         <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                         <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu email"
                             {...register("email", {
                             required: {
                            value: true,
                            message: "Esse campo é obrigatório"
                        },
                        validate: validateEmail
                    })}
                />
                {errors.email && <span className='text-danger text-sm'>{errors.email.message}</span>}
            </div>
                        <div className="form-group">
                            <label htmlFor="sexo" className="form-label">Sexo</label>
                            <select
                                id="sexo"
                                className="form-select"
                                {...register("sexo", {
                                    required: {
                                        value: true,
                                        message: "Por favor, selecione uma opção."
                                    },
                                    validate: (value) => value !== "" || "Por favor, selecione uma opção válida."
                                })}
                            >
                                <option selected>Selecione seu sexo</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outros">Outros</option>
                            </select>
                            {errors.sexo && <span className='text-danger text-sm'>{errors.sexo.message}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input
                                type="text"
                                id="cpf"
                                className="form-control"
                                placeholder="000.000.000-00"
                                {...register("cpf", {
                                    required: {
                                        value: true,
                                        message: "Esse campo é obrigatório"
                                    },
                                    validate: validateCPF
                                })}
                            />
                            {errors.cpf && <span className='text-danger text-sm'>{errors.cpf.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                            <input
                                type="text"
                                id="dataNascimento"
                                className="form-control"
                                placeholder="00/00/0000"
                                {...register("dataNascimento", {
                                    required: {
                                        value: true,
                                        message: "Esse campo é obrigatório"
                                    },
                                    validate: validateDate
                                })}
                            />
                            {errors.dataNascimento && <span className='text-danger text-sm'>{errors.dataNascimento.message}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                className="form-control"
                                placeholder="********"
                                {...register("senha", {
                                    required: {
                                        value: true,
                                        message: "Esse campo é obrigatório"
                                    },
                                })}
                            />
                            {errors.senha && <span className='text-danger text-sm'>{errors.senha.message}</span>}
                        </div>
                    </div>

                    <EnderecoComponent />

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

export default CadastroUsuario