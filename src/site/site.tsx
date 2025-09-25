import Menu from "./components/menu";
import Banner from "./components/banner";
import Features from "./components/features";
import Testemunho from "./components/testemunho";
import Precos from "./components/precos";
import Footer from "./components/footer";

function Site() {
    return <div>
        <Menu />
        <Banner />
        <Features />
        <Testemunho />
        <Precos />
        <Footer />
    </div>;
}

export default Site;