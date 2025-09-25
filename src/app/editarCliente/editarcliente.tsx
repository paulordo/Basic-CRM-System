import { useState, useEffect } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import './editarcliente.css';
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";


function EditarCliente() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            setMensagem("Id inválido");
            return;
        }
        const docRef = doc(db, "clientes", id);
        getDoc(docRef)
            .then((resultado) => {
                if (resultado.exists()) {
                    const dados = resultado.data();
                    setNome(dados.nome);
                    setEmail(dados.email);
                    setFone(dados.fone);
                } else {
                    setMensagem('Cliente não encontrado');
                }
            })
            .catch((erro) => {
                setMensagem('erro: ' + erro)
            });
    }, [])

    function AlterarCliente() {

        if (nome.length === 0) {
            setMensagem('Informe o nome')
        } else if (email.length === 0) {
            setMensagem('Informe o E-mail')
        }
        else {
            if (!id) {
                setMensagem('Id inválido');
                setSucesso('N');
                return;
            }
            const docRef = doc(db, 'clientes', id);
            updateDoc(docRef, {
                nome: nome,
                email: email,
                fone: fone,
            })
                .then(() => {
                    setMensagem('')
                    setSucesso('S')
                })

                .catch((erro) => {
                    setMensagem(erro)
                    setSucesso('N')
                })
        }
    }
    return <div>
        <Navbar />
        <div className="container-fluid titulo">
            <div className="offset-lg-3 col-lg-6">
                <h1>Editar Cliente</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Código</label>
                        <input value={id} type="text" className="form-control" id="exampleInputEmail1" disabled />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                        <input onChange={(e) => setNome(e.target.value)} value={nome} type="text" className="form-control" id="exampleInputEmail1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Fone</label>
                        <input onChange={(e) => setFone(e.target.value)} value={fone} type="text" className="form-control" id="exampleInputEmail1" />
                    </div>

                    <div className="text-center">
                        <Link to='/app/home' className="btn btn-outline-primary btn-acao">Cancelar</Link>
                        <button onClick={AlterarCliente} type="button" className="btn btn-primary btn-acao">Salvar</button>
                    </div>
                    {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                    {sucesso === 'S' ? <Navigate to='/app/home' /> : null}
                </form>
            </div>
        </div>
    </div>;
}

export default EditarCliente;