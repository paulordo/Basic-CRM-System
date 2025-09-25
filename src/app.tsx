import { useContext, type ReactNode } from 'react';
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import { AuthContext } from "./app/context/auth";

/* Paginas */
import Site from './site/site';
import Login from './app/login/login'
import NovaConta from "./app/novaConta/novaconta";
import ResetSenha from "./app/resetSenha/resetsenha";
import Home from "./app/home/home"
import NovoCliente from "./app/novoCliente/novocliente";
import EditarCliente from "./app/editarCliente/editarcliente"

function App() {

  type SecureRouteProps = {
    children: ReactNode;
  };

  const SecureRoute = ({ children }: SecureRouteProps) => {
    const { logado } = useContext(AuthContext);
    return logado ? children : <Navigate to="/app" />;
  };

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Site />} />
      <Route path='/app' element={<Login />} />
      <Route path='/app/novaconta' element={<NovaConta />} />
      <Route path='/app/resetsenha' element={<ResetSenha />} />

      <Route path='/app/home' element={<SecureRoute><Home /></SecureRoute>} />
      <Route path='/app/novocliente' element={<SecureRoute><NovoCliente /></SecureRoute>} />
      <Route path='/app/editarcliente/:id' element={<SecureRoute><EditarCliente /></SecureRoute>} />
    </Routes>
  </BrowserRouter>
}

export default App;