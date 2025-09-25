import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth";
import './navbar.css';

interface INavbarProps {
   tamanhoImagemLogo?: number
}

const Navbar: React.FC<INavbarProps> = (props) => {
    const {tamanhoImagemLogo = 40} = props;

    const { setLogado } = useContext(AuthContext);

    function Logout() {
        setLogado(false);
        localStorage.removeItem("logado")
    }

    return <nav className="navbar fixed-top navbar-expand-lg navbar-dark">

        <div className="container-fluid">

            <a className="navbar-brand" href="/#">
                <img src="/images/logo.png" alt="" height={tamanhoImagemLogo}></img>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/app/home" className="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/app/novocliente" className="nav-link active" aria-current="page" >Novo Cliente</Link>
                    </li>
                    <li className="nav-item">
                        <a onClick={Logout} className="nav-link active logout" aria-current="page">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}


// function Navbar() {

//     const { setLogado } = useContext(AuthContext);

//     function Logout() {
//         setLogado(false);
//         localStorage.removeItem("logado")
//     }

//     return <nav className="navbar fixed-top navbar-expand-lg navbar-dark">

//         <div className="container-fluid">

//             <a className="navbar-brand" href="/#">
//                 <img src="/images/logo.png" alt="" height={40}></img>
//             </a>

//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                         <Link to="/app/home" className="nav-link active" aria-current="page" >Home</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/app/novocliente" className="nav-link active" aria-current="page" >Novo Cliente</Link>
//                     </li>
//                     <li className="nav-item">
//                         <a onClick={Logout} className="nav-link active logout" aria-current="page">Sair</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>;
// }

export default Navbar;