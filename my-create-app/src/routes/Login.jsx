// Importa useState do React para gerenciar o estado do componente
import { useState } from "react";
// Importa Link e useNavigate do react-router-dom para criar links e navegar entre as páginas
import { useNavigate } from "react-router-dom";
// Importa o arquivo de estilos Login.scss
import "../css/Login.scss";

// Componente funcional Login
export default function Login() {
    // Obtém a função de navegação usando o hook useNavigate
    const navigate = useNavigate();

    // Define o estado inicial do usuário (email e senha) usando o hook useState
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    });

    // Função chamada quando há uma mudança nos campos de input
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Atualiza o estado do usuário com os novos valores dos campos
        setUsuario({ ...usuario, [name]: value });
    };

    // Função chamada quando o formulário é enviado
    const handleSubmit = async (e) => {
        // Evita o comportamento padrão do formulário (recarregamento da página)
        e.preventDefault();

        let users;

        try {
            // Faz uma requisição para obter os usuários do servidor
            const response = await fetch("http://localhost:5000/usuarios");
            // Converte a resposta para formato JSON
            users = await response.json();
        } catch (error) {
            // Exibe um alerta se houver um erro durante o processo
            alert("Algo de errado aconteceu durante o processo!");
        }

        // Itera sobre os usuários para verificar o login
        for (let x = 0; x < users.length; x++) {
            const user = users[x];
            if (user.email === usuario.email && user.senha === usuario.senha) {
                // Se as credenciais são válidas, gera um token, armazena informações no sessionStorage e navega para '/conteudo'
                alert("Login realizado!");
                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                console.log(tokenUser);
                sessionStorage.setItem("token-usuario", tokenUser);
                sessionStorage.setItem("dados-usuario", JSON.stringify(users[x]));
                navigate('/conteudo', { replace: true });
                return;
            }
        }

        // Se as credenciais não são encontradas, exibe uma mensagem de erro e limpa o estado do usuário
        alert("Login incorreto, tente novamente.");
        setUsuario({
            email: "",
            senha: ""
        });
    };

    // Renderiza o componente
    return (
        <div className="geralLogin">
            <div className="login">
                {/* Formulário de login associado à função handleSubmit */}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* Título do formulário */}
                        <legend><h3>Informações do Usuário</h3></legend>
                        {/* Campo de input para o email */}
                        <label htmlFor="idEmail">Email</label>
                        <input type="email" id="idEmail" name="email" placeholder="Digite seu email" value={usuario.email} onChange={handleChange} />
                        {/* Campo de input para a senha */}
                        <label htmlFor="idSenha">Senha</label>
                        <input type="password" id="idSenha" name="senha" placeholder="Digite sua senha" value={usuario.senha} onChange={handleChange} />
                        {/* Botão de login */}
                        <button>Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
