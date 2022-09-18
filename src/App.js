import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Produtos } from './components/Produtos';
import { Sobre } from './components/Sobre';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Produtos />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
