import logo from './logo.svg';
import './App.css';
import Header from './Header';
import "./style.scss"
import { Button } from 'antd';
import { Link } from 'react-router-dom';

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
          <div>
          <Link to="/create-avis">
        <Button type="primary">Nouveau avis de passage</Button>
        </Link>
        </div>
        <div>
        <Link to="/avis">
        <Button type="primary">Listes des avis de passage</Button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
