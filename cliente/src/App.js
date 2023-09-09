import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./components/home/Home";
import Homeusu from "./components/home/Homeusu";
import HomeAdmin from "./components/home/HomeAdmin";
import CatalogoArt from "./components/catalogo/CatalogoArt";
import CatalogoArtUsu from "./components/catalogo/CatalogoArtUsu";
import RegistrarArt from "./components/catalogo/RegistrarArt";
import UpdateArt from "./components/catalogo/UpdateArt";
import Logingreso from "./components/Usuarios/Logingreso";
import ListadoUsu from "./components/Usuarios/ListadoUsu";
import Registrousuario from "./components/Usuarios/Registrousuario";
import UpdateUsuario from "./components/Usuarios/UpdateUsuario"; 
import Cerrarsesion from "./components/Usuarios/Cerrarsesion"; 
import CatalogOtrosart from "./components/catalogo/CatalogOtrosart";
import CatalogoDataApi from "./components/catalogo/CatalogOtrosart";
import CatalogOtrosartUsu from "./components/catalogo/CatalogOtrosartUsu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Logingreso />} />
          <Route path="/Homeusu" element={<Homeusu />} />
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
          <Route path="/Home" element={<Cerrarsesion />} />
          <Route path="/CatalogoArt" element={<CatalogoArt/>} />
          <Route path="/CatalogoArtUsu" element={<CatalogoArtUsu/>} />
          <Route path="/CatalogOtrosartUsu" element={<CatalogOtrosartUsu/>} />
          <Route path="/ListadoUsu" element={<ListadoUsu />} />
          <Route path="/RegistrarArt" element={<RegistrarArt/>} />
          <Route path="/RegistrarUsu" element={<Registrousuario />} /> 
          <Route path="/ModificarArt/:id" element={<UpdateArt />} /> 
          <Route path="/ModificarUsu/:id" element={<UpdateUsuario />} /> 
          <Route path="/CatalogOtrosart" element={<CatalogOtrosart />} /> 
          <Route path="/CatalogoDataApi" element={<CatalogoDataApi />} /> 
          
        </Routes>
      </Router>
    </div>
  );
}
export default App;