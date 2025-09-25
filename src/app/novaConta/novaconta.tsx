import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import './novaconta.css';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

function NovaConta() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function cadastrarUsuario() {
        setMensagem('');

        if (!email || !senha) {
            setMensagem('Informe todos os campos')
            return;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then(() => {
                setSucesso('S')
            }).catch(error => {
                setSucesso('N');
                if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setMensagem('A senha deve conter pelo menos 6 caractéres.')
                } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setMensagem('Este e-mail é inválido')
                } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setMensagem('Este  e-mail já está sendo utilizado por outra conta.')
                } else {
                    setMensagem(error.message);
                }
            })
    }

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="/images/logo.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 fw-normal">Criar conta</h1>

            <div className="form-floating">
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                <label htmlFor="floatingInput">Email</label>
            </div>

            <div className="form-floating">
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button onClick={cadastrarUsuario} className="btn btn-primary w-100 py-2" type="button">Criar conta</button>

            {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
            {sucesso === 'S' ? <Navigate to='/app/home'/> : null}

            <div className="login-links mt-5">
                <Link to="/app" className="mx-3">Já tenho uma conta</Link>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Paulo</p>
        </form>
    </div>;
}

export default NovaConta;