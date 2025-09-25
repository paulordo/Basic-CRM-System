function Menu(){
    return <nav className="navbar fixed-top navbar-expand-lg navbar-dark">

        <div className="container">
                <a className="navbar-brand" href="">
                    <img src="images/logo.png" alt="" height={40}></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#banner">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#features">Feature</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#testemunho">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#preco">Planos e Preçoes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#footer">Contato</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>;
}

export default Menu;