import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
function App() {
 

  return (
    <>
    <header className="bg-stars bg-cover bg-no-repeat">
    <Layout/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
      
        </Routes>
        </header>
    </>
  )
}

export default App
