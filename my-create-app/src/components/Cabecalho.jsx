import "../css/Cabecalho.scss"
import { Link, useLocation } from "react-router-dom";



export default function Cabecalho(){

    const rotaAtual = useLocation();

    const handleLogout = () => {

        sessionStorage.removeItem("token-usuario");
        sessionStorage.removeItem("dados-usuario");

        alert("Logout realizado!")

        window.location = '/';
  }


  if (sessionStorage.getItem("token-usuario")){ 
    return(
        <div>
            <div className="logout">
                <h2> 
                    Bem Vindo(a) {JSON.parse(sessionStorage.getItem("dados-usuario")).name} 
                </h2>
                <h3> Global Solution 2023 - Engenharia de Software</h3>
                {sessionStorage.getItem("token-usuario") ? (
                <Link onClick={handleLogout} class="link"> Logout </Link>
                ) : (<Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>  </Link>
                )}  
                
            </div>





        </div>
    )
}
}   