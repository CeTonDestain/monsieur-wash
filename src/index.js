import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NewAvisPassage from './Component/NewAvisPassage';
import ListAvisPassage from './Component/ListAvisPassage';
import DetailAvis from './Component/DetailAvis';


const Root=()=>{
  return(
    <BrowserRouter>
    <Routes>
    <Route exact path='/create-avis' element={<NewAvisPassage/>}/>
      <Route exact path='/' element={<App/>}/>
      <Route exact path='/avis' element={<ListAvisPassage/>}/>
      <Route exact path='/avis/:avis' element={<DetailAvis />}/>
    </Routes>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
