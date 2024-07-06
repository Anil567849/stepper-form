import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import { useSelector } from 'react-redux';

function App() {

  const {step} = useSelector(state => state.steps);
  let Com;

  switch (step) {
    case 2:
      Com = Step2;
      break;
    case 3:
      Com = Step3;
      break;
    default:
      Com = Step1;
      break;
  }

  return (
    <div className="App"> 
      <Header/>
      <Com/>
    </div>
  );
}

export default App;
