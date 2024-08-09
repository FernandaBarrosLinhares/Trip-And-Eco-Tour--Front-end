import {BrowserRouter} from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/Auth'
import RoutesApp from './routes'


function App() {


  return (
    <>
     <AuthProvider>
          <BrowserRouter>

            <RoutesApp/>

          </BrowserRouter>

     </AuthProvider>
    
       
     
    </>
  )
}

export default App

