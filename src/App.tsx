

import './App.css'
import Home from './paginas/home/Home'
import Contador from './paginas/home/contador/Contador'
import Tarefa from './paginas/tarefa/Tarefa'

function App() {


  return (
    <>
      <Home titulo="Esse é o componente com Props"
        texto="Agora já estamos trabalhando com props - componente chamado com sucesso" />

      <Home titulo="Agora estamos testando"
        texto="comprovar a teoria do props" />

        <Contador />

        <Tarefa />
    </>

  )
}

export default App
