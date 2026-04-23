import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Container>
          <Logo />
        </Container>

        <Container>
          <Menu />
        </Container>

        <Container>
          <CountDown />
        </Container>

        <Container>
          <form className='form' action=''>
            <div className='formRow'>
              <DefaultInput id="meuInput" labelText='task' type="text"/>
            </div>
            <div className='formRow'>
              <p>Lorem, ipsum dolor sit amet.</p>
            </div>
            <div className='formRow'>
              
            </div>
            <div className='formRow'>
              <button>Enviar</button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}

export default App;
