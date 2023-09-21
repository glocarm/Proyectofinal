// import './Contactanos.css';
import "../../assets/css/App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarAdmin from "../menu/NavBarAdmin";
import axios from "axios";

function RegistrarArt() {
  const [CodArticulo, setCodArticulo] = useState("");
  const [NombArticulo, setNombArticulo] = useState("");
  const [TipoArticulo, setTipoArticulo] = useState("");
  const [StockArticulo, setStockArticulo] = useState("");
  const [PrecioArticulo, setPrecioArticulo] = useState("");
  const [ImagenArticulo, setImagenArticulo] = useState("");
  const [EstArticulo, setEstArticulo] = useState("");
  const navegar = useNavigate();
  function registrarart() {
    const newArt = {
      CodArticulo: CodArticulo,
      NombArticulo: NombArticulo,
      TipoArticulo: TipoArticulo,
      StockArticulo: StockArticulo,
      PrecioArticulo: PrecioArticulo,
      ImagenArticulo: ImagenArticulo,
      EstArticulo: EstArticulo,
    };
    axios
      .post("https://proyectobf.onrender.com/RegistrarArt", newArt)
      .then((res) => console.log(res.data))
      .then((error) => console.log(error));
    alert("Desea Registrar el Articulo?");  //revisar este mensaje ..siempre aparece.
    navegar(0);
  }

  return (
    <div className="container bodyPage">
        <NavBarAdmin />
      <div className="row">
        <h2> Registro de Articulos</h2>
      </div>
     
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <form className="formContacto" >
              <div>
                <label className="labelContacto" htmlFor="CodArticulo">
                  Codigo del Articulo:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="CodArticulo"
                  value={CodArticulo}
                  onChange={(e) => setCodArticulo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="NombArticulo">
                  Nombre del Articulo:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="NombArticulo"
                  value={NombArticulo}
                  onChange={(e) => setNombArticulo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="TipoArticulo">
                  Tipo Articulo:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="TipoArticulo"
                  value={TipoArticulo}
                  onChange={(e) => setTipoArticulo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="StockArticulo">
                  Cantidad de Articulo:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="StockArticulo"
                  value={StockArticulo}
                  onChange={(e) => setStockArticulo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="PrecioArticulo">
                  Precio Articulo:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="PrecioArticulo"
                  value={PrecioArticulo}
                  onChange={(e) => setPrecioArticulo(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="labelContacto" htmlFor="ImagenArticulo">
                  Imagen Articulo:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="ImagenArticulo"
                  value={ImagenArticulo}
                  onChange={(e) => setImagenArticulo(e.target.value)}
                  placeholder="http://localhost:3000/img/collar1.jpeg"
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="EstArticulo">
                  Estatus Articulo:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="EstArticulo"
                  value="ACTIVO"
                  onChange={(e) => setEstArticulo(e.target.value)}
                  required
                />
              </div>
              <button onClick={registrarart} className="fondo1">
                Agregar Articulo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrarArt;
