import logo from './logo.svg';
import './App.css';
import Header from './Header';
import "./style.scss"
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <div className="main">
        <div className="mainImage">
        </div>
        <div className="mainButton">
        <Button type="primary">Nouveau avis de passage</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
