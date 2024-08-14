import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/NavBar';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer';
import { ListaTemas } from './components/Temas/ListaTemas';
import { FormularioTema } from './components/Temas/FormularioTema';
import { DeletarTema } from './components/Temas/DeletarTema';
import { ListaPostagens } from './components/postagens/listaPostagens/ListaPostagens';
import { FormularioPostagem } from './components/postagens/formularioPostagem/FormularioPostagem';
import { DeletarPostagem } from './components/postagens/deletarPostagem/DeletarPostagem';

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}