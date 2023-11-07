import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Button from './components/Button/Button';
import InicioButton from './components/InicioButton/InicioButton'; // Importe o novo componente
import Div from './components/Div/Div';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      <Header />
      <div className="content">
        <Body />
        <Button />
        <InicioButton />
      </div>
    </div>
    </>
  );
}

export default App
