function Testemunho() {
    return <section id="testemunho">
        <div className="container">

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>O sistema me surpreendeu pela praticidade. Em poucos minutos, consegui cadastrar meus clientes e começar a usar os recursos. Está facilitando muito meu dia a dia</h2>
                        <img src="images/cliente.jpg"></img>
                        <em>Marcelo Silva - São Paulo</em>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Gostei bastante da interface e da agilidade. Em poucos cliques tenho acesso a todo o histórico dos meus clientes. Recomendo!</h2>
                        <img src="images/cliente.jpg"></img>
                        <em>João Lopes - Porto alegre</em>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>;
}

export default Testemunho;