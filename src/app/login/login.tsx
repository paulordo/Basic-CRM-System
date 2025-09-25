import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom"
import './login.css';
import { AuthContext } from "../context/auth";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');
    const { setLogado } = useContext(AuthContext);

    function LoginUsuario() {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, senha)
            .then(function () {
                setLogado(true);
                setSucesso('S');
                localStorage.setItem("logado", "S")
            })
            .catch(function () {
                setLogado(false);
                setSucesso('N');
                localStorage.setItem("logado", "N")
            })
    }

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="images/logo.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating">
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                <label htmlFor="floatingInput">Email</label>
            </div>

            <div className="form-floating">
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button onClick={LoginUsuario} className="btn btn-primary w-100 py-2" type="button">Acessar</button>

            {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div> : null}
            {sucesso === 'S' ? <Navigate to='/app/home' /> : null}
            <div className="login-links mt-5">
                <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
                <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Paulo</p>
        </form>
    </div>;
}

export default Login;