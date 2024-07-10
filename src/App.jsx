import { useState } from 'react'
import './App.css'
import View from './components/View'
import Records from './components/Record'
import Add from './components/Add'
import{Route,Routes} from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div className="app">
    
  
    
    <h1> Welcome</h1>
    <View/>
  
      <Routes>
        <Route path='/' element={<Records/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
      </div>

    </>
  )
}

export default App
