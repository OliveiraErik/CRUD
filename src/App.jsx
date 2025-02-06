import {Route , Routes, BrowserRouter} from 'react-router-dom'
//Components
import NavBar from './components/NavBar'
//Pages
import CreateProductsPage from './pages/CreatePage'
import Home from './pages/Home'
import EditePage from './pages/EditePage'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/create' element={<CreateProductsPage/>}/>
      <Route path='/products/:id' element={<EditePage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
