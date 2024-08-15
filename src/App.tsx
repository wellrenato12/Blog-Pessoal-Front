import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/Footer';
import { Navbar } from './components/NavBar';
import { DeletarPostagem } from './components/postagens/deletarPostagem/DeletarPostagem';
import { FormularioPostagem } from './components/postagens/formularioPostagem/FormularioPostagem';
import { ListaPostagens } from './components/postagens/listaPostagens/ListaPostagens';
import { DeletarTema } from './components/Temas/DeletarTema';
import { FormularioTema } from './components/Temas/FormularioTema';
import { ListaTemas } from './components/Temas/ListaTemas';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home/Home';
import { Perfil } from './pages/perfil/Perfil';
import { Login } from './pages/Login';

export function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
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
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

