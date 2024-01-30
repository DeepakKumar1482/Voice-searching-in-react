import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cards from './Cards'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/card' element={<Cards />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
