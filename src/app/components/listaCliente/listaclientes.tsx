import { Link } from "react-router-dom"
import './listaclientes.css'

type Cliente =  {
    id: string, 
    nome: string, 
    email: string, 
    fone: string
}

type ListaClientesProps = {
    arrayClientes: Cliente[];
    clickDelete: (id: string) => void;
}

function ListaClientes(props: ListaClientesProps) {

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="table-secondary">
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Telefone</th>
                    <th scope="col" className="col-acao"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.arrayClientes.map((cliente: Cliente) => (
                        <tr key={cliente.id}>
                            <th scope="row">{cliente.id}</th>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.fone}</td>
                            <td>
                                <Link to={`/app/editarcliente/${cliente.id}`}><i className="fa-solid fa-pencil icone-acao"></i></Link>
                                <Link to='#' onClick={() => props.clickDelete(cliente.id)}><i className="fa-solid fa-trash icone-acao red"></i></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default ListaClientes;