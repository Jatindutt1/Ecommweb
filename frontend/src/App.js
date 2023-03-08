import './App.css';
import Topbar from './layouts/Topbar';
import { Route } from "react-router-dom"
import Cards from "./component/Cards"
import { Routes } from "react-router-dom"



function App() {
  return (
    <>
      <Topbar />
      

        <Routes>
          <Route path='/home' element={<Cards />} />

        </Routes>


      
    </>

  );
}

export default App;
