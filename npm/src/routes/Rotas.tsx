import {Routes, Route} from 'react-router-dom';
import Login from '../pages/login/Login';
import Cadastro from '../pages/cadastro/Cadastro';



export default function Rotas(){
    return(
        <Routes>
            <Route path="/" Component={Login} />
            <Route path="/cadastro" Component={Cadastro} />   
        </Routes>
    )
}