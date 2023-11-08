import { useState } from 'react'
import './App.css'
import  styled from 'styled-components'


const Button = styled.button `
  background-color: #b2dfdb;
  color: black;
  font-size: 20px;
  padding: 15px 25px;
  width: 30rem;
  border-radius: 7px;
  outline: 0;
  text-transform: uppercase;
  margin: 25px 0px;
  cursor: pointer;
  box-shadow: 0px 0px 0px lightgray;
  transition: ease background-color 250ms;
  &:hover{
    background-color: #80cbc4;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
    background-color: #b2dfdb;
  }
`
const Box = styled.div`
  width: 480px;
  height: 300px;
  background-color: #ffcc80;
  margin: 0px 0px 0px 0px;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 0px -1.5px 0px gray;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h2 class="alignB">Bem-vindo ao</h2>
        <h1 class="alignB">HubNotes</h1>
      </header>
      <body>
        <div class="align">
          <Box>
              <h2 class="alignB">Próximas Datas</h2>
          </Box>
        </div>
        <div class="alignB">
          <Button>
            Anotações
          </Button>
        </div>
        <div class="alignB">
          <Button>
            Lista de Tarefas
          </Button>
        </div>
        <div class="alignB">
          <Button disabled>
            Calendário
          </Button>
        </div>
      </body>
    </div>
  )
}

export default App
