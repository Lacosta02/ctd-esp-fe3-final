import { Routes, Route } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import NotFound from "./Components/NotFound";
import Layout from "./Layout/Layout";
import './App.css'

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path={routes.home} element={<Home/>} />
                <Route path={routes.contact} element={<Contact/>} />
                <Route path={routes.detail} element={<Detail/>} />
                <Route path={routes.favs} element={<Favs/>}/>
                <Route path={routes.pageNotFound} element={<NotFound/>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
