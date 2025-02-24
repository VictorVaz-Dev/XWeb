import {Routes, Route} from 'react-router-dom';
import Login from '../pages/login/Login';
import Cadastro from '../pages/cadastro/Cadastro';
import Home from '../pages/home/Home';


export default function Rotas(){
    return(
        <Routes>
            <Route path="/Login" Component={Login} />
            <Route path="/Cadastro" Component={Cadastro} />   

            
        </Routes>
    )
}