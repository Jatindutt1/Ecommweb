import Topbar from './layouts/Topbar';
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Mainhomesection from './component/Home/Mainhomesection';




function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/' element={<Mainhomesection />} />
      </Routes>
      <Routes>
        {/* <Route path='/home' element={} /> */}
      </Routes>
    </>

  );
}

export default App;
