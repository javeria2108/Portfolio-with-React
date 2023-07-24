import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
function App() {
 

  return (
    <>
    <Layout/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
      
        </Routes>
        
    </>
  )
}

export default App
