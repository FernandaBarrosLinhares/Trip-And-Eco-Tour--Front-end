import { useForm } from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import  './Login.css'


function Login(){

const {register,handleSubmit, formState}= useForm()
const { errors, isSubmitting } = formState
const { signIn } = useAuth();
const navigate = useNavigate();


    async function onSubmit(dados) {
        
        signIn(dados);
       
        navigate('/dashboard');
       
    }   

  
    return(
        
        <>
      
        <main className= "container">
            <div className="formulario">
                <form onSubmit={handleSubmit(onSubmit)}>
                <img 
                        className="mb-4 logo" 
                        src="https://http2.mlstatic.com/D_NQ_NP_813708-MLU70381945405_072023-O.webp" 
                        alt="Trip and eco tour"  
                        height="150"
                        width="200" 
                    />
                   
                    <div className="form-floating">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com" 
                            {...register("email", { 
                                required: {
                                    value: true,
                                    message: "Esse campo é obrigatório"
                                },
                            })}
                         
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {errors.email && <span className='text-danger text-sm'>{errors.email.message}</span>}
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            {...register("password")}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2 mb-8" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Carrengado...': 'Entrar'}</button>
                    
               
                    
                    <p className='cadastro'>
                        Não possui cadastro? 
                    <Link className='btn-link' to='/cadastrousuario'>
                        <button className='btn btn-outline-primary'>Cadastrar</button>
                    </Link>
                    </p>
                </form>
            </div>

        </main>
       
        
        </>
    )
}

export default Login