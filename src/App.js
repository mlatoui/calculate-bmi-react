import './App.css';
import { Header } from './components/Header';
import { BMIForm } from './components/BMIForm';
import { Result } from './components/Result';

function App() {
  return (
    <div className="App">
      <Header />
      <BMIForm />
      <Result />
    </div>
  );
}

export default App;
