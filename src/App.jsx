import './App.css';
import { Header } from './components/Header';
import { BMIForm } from './components/BMIForm';

function App() {
  return (
    <div id="app">
      <div className="container">
        <Header />
        <BMIForm />
      </div>
    </div>
  );
}

export default App;
