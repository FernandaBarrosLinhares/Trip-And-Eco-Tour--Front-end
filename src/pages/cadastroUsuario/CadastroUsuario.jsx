
import { useState } from 'react';
import './CadastroUsuario.css';

function CadastroUsuario() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
    });
    const [dadosUsuario, setDadosUsuario] = useState({
        nome: '',
        email: '',
        sexo: '',
        cpf: '',
        dataNascimento: '',
        senha: ''
    });

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name in endereco) {
            setEndereco(prevEndereco => ({
                ...prevEndereco,
                [name]: value
            }));
        } else {
            setDadosUsuario(prevDados => ({
                ...prevDados,
                [name]: value
            }));
        }
    };

    const handleChangeCep = async (e) => {
        const newCep = e.target.value;
        setCep(newCep);

        if (newCep.length === 8) {
            try {
                const response = await fetch(`https://cep.awesomeapi.com.br/json/${newCep}`);
                const data = await response.json();

                if (data.status === 400) {
                    alert("CEP inválido. Por favor, verifique o CEP e tente novamente.");
                    return;
                }

                setEndereco({
                    logradouro: data.logradouro || '',
                    complemento: data.complemento || '',
                    bairro: data.bairro || '',
                    localidade: data.cidade || '',
                    uf: data.estado || ''
                });
            } catch (error) {
                console.error("Erro ao buscar o CEP:", error);
                alert("Erro ao buscar o CEP. Tente novamente mais tarde.");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosCompletos = { ...dadosUsuario, cep, ...endereco };

        try {
            const resposta = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosCompletos)
            });

            if (!resposta.ok) {
                alert("Houve um erro ao cadastrar usuário");
            } else {
                alert("Usuário cadastrado com sucesso!");
            }
        } catch (error) {
            alert("Houve um erro ao cadastrar usuário");
            console.error("Erro:", error);
        }
    };

    return (
        <main className='picture-container'>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h3 className="h3 mb-3 fw-normal">Preencha todos os campos para realizar seu cadastro!</h3>

                    <div className="form-row">
                        <div className="form-group nome">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                className="form-control"
                                placeholder="Digite seu nome"
                                value={dadosUsuario.nome}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 form-group email">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Digite seu email"
                                value={dadosUsuario.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sexo" className="form-label">Sexo</label>
                            <select
                                id="sexo"
                                name="sexo"
                                className="form-select"
                                value={dadosUsuario.sexo}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecione seu sexo</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                className="form-control"
                                placeholder="000.000.000-00"
                                value={dadosUsuario.cpf}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                            <input
                                type="text"
                                id="dataNascimento"
                                name="dataNascimento"
                                className="form-control"
                                placeholder="00/00/0000"
                                value={dadosUsuario.dataNascimento}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                className="form-control"
                                placeholder="********"
                                value={dadosUsuario.senha}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="mb-3 form-group cep">
                            <label htmlFor="cep" className="form-label">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                name="cep"
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
                                name="logradouro"
                                className="form-control"
                                placeholder="Rua"
                                value={endereco.logradouro}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 form-group numero">
                            <label htmlFor="numero" className="form-label">Número</label>
                            <input
                                type="text"
                                id="numero"
                                name="numero"
                                className="form-control"
                                placeholder="Número"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 form-group bairro">
                            <label htmlFor="bairro" className="form-label">Bairro</label>
                            <input
                                type="text"
                                id="bairro"
                                name="bairro"
                                className="form-control"
                                placeholder="Bairro"
                                value={endereco.bairro}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 form-group cidade">
                            <label htmlFor="cidade" className="form-label">Cidade</label>
                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                className="form-control"
                                placeholder="Cidade"
                                value={endereco.cidade}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 form-group estado">
                            <label htmlFor="estado" className="form-label">Estado</label>
                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                className="form-control"
                                placeholder="Estado"
                                value={endereco.estado}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <button className="btn btn-success" type="submit">
                        Cadastrar
                    </button>
                    <button type="button" className="btn btn-secondary">Atualizar</button>
                    
                        
                    <button type="button" className="btn btn-danger">Deletar</button>
                </form>
            </div>
        </main>
    );
}

export default CadastroUsuario;

