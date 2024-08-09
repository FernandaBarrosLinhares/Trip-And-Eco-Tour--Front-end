import Menu from '../../components/menu/Menu'
import {useAuth} from '../../context/Auth'

function Dashboard(){
    const dados = useAuth()
    console.log(dados.signIn)

    return(
        <>
        <Menu/>
        </>
    )
}

export default Dashboard