
import './App.css'
import Heading from './components/Heading'
import Tours from './components/Tours'
import data from './utils/data'
function App() {


  return (
    <>
      <Heading></Heading>
      <Tours tours={data}></Tours>
    </>
  )
}

export default App
