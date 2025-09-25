import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Navbar from "../components/navbar/navbar";
import ListaClientes from "../components/listaCliente/listaclientes";

import './home.css';
import { db } from "../config/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import SweetAlert from "react-bootstrap-sweetalert";

import clientesPDF from "../reports/Clientes/clientes";

type Cliente = {
    id: string;
    nome: string;
    email: string;
    fone: string;
};

function Home() {

    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');
    const [excluido, setExcluido] = useState('');
    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmacaoId, setConfirmacaoId] = useState<string | null>(null);

    function deleteUser(id: string) {
        const docRef = doc(db, "clientes", id);
        deleteDoc(docRef)
            .then(() => {
                setExcluido(id);
                setConfirmacao(false);
            }
            )
    };

    function confirmDeleteUser(id: string) {
        setConfirmacaoId(id);
        setConfirmacao(true);
    }

    useEffect(function () {
        async function carregarClientes() {
            const resultado = await getDocs(collection(db, "clientes"));
            const listaCli: Cliente[] = resultado.docs
                .map((doc) => ({
                    id: doc.id,
                    nome: doc.data().nome,
                    email: doc.data().email,
                    fone: doc.data().fone,
                }))
                .filter((cli) => cli.nome.includes(busca)) as Cliente[];
            setClientes(listaCli);
        }
        carregarClientes();
    }, [busca, excluido]);

    return <div className="container-fluid">
        <Navbar />
        <div className="container-fluid titulo">
            <h1>Cadastro de clientes</h1>
            <div className="row">
                <div className="col-md-4">
                    <Link to="/app/novocliente" className="btn btn-primary btn-cli" type="button"><i className="fa-solid fa-plus"></i> Cliente</Link>
                    <button onClick={() => clientesPDF(clientes)} className="btn btn-danger btn-cli" type="button" id="button-addon2"><i className="fa-solid fa-file-pdf"></i> Gerar PDF</button>
                </div>

                <div className="col-8">
                    <div className="input-group mb-3">
                        <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2" />
                        <button onClick={() => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i> Pesquisar</button>
                    </div>
                </div>

            </div>

        </div>
        <ListaClientes arrayClientes={clientes} clickDelete={confirmDeleteUser} />

        {
            confirmacao ?
            // @ts-ignore react-bootstrap-sweetalert não tem types oficiais ainda.
                <SweetAlert
                    warning
                    showCancel
                    showCloseButton
                    confirmBtnText="Sim"
                    confirmBtnBsStyle="danger"
                    cancelBtnText="Não"
                    cancelBtnBsStyle="light"
                    title="Exclusão"
                    onConfirm={() => { 
                        if (confirmacaoId !== null) {
                            deleteUser(confirmacaoId);
                        }
                    }}
                    onCancel={() => setConfirmacao(false)}
                    reverseButtons={true}
                >
                    Deseja excluir o cliente selecionado?
                </SweetAlert> as any : null}
    </div>
}

export default Home;