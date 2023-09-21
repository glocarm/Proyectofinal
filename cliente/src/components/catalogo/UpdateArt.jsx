import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import NavBarAdmin from "../menu/NavBarAdmin";


function UpdateArt() {
  const params = useParams();
  const [CodArticulo, setCodArticulo] = useState("");
  const [NombArticulo, setNombArticulo] = useState("");
  const [TipoArticulo, setTipoArticulo] = useState("");
  const [StockArticulo, setStockArticulo] = useState("");
  const [PrecioArticulo, setPrecioArticulo] = useState("");
  const [ImagenArticulo, setImagenArticulo] = useState("");
  const [EstArticulo, setEstArticulo] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    axios
      .patch('https://proyectobf.onrender.com/ModificarArt/' + params.id)
      .then((res) => {
        let dataArticulo = res.data;
        setCodArticulo(dataArticulo.data.CodArticulo);
        setNombArticulo(dataArticulo.data.NombArticulo);
        setTipoArticulo(dataArticulo.data.TipoArticulo);
        setStockArticulo(dataArticulo.data.StockArticulo);
        setPrecioArticulo(dataArticulo.data.PrecioArticulo);
        setImagenArticulo(dataArticulo.data.ImagenArticulo);
        setEstArticulo(dataArticulo.data.EstArticulo);
      });
  }, []);

  function editararticulo() {
    const articulomodif = {
      CodArticulo: CodArticulo,
      NombArticulo: NombArticulo,
      TipoArticulo: TipoArticulo,
      StockArticulo: StockArticulo,
      PrecioArticulo: PrecioArticulo,
      ImagenArticulo: ImagenArticulo,
      EstArticulo: EstArticulo,
    };
    axios
      .patch("https://proyectobf.onrender.com/ModificarArt/" + params.id , articulomodif)
      .then((res) => {
        console.log(res.data)
        alert("Articulo Actualizado con éxito")
        navegar("/")
      });
  }

  return (
    <div className="container bodyPage">
     <NavBarAdmin /> 
      <div className="row">
        <h2> Editar Articulo</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <form className="formContacto">
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
                  value={EstArticulo}
                  onChange={(e) => setEstArticulo(e.target.value)}
                  required
                />
              </div>
              <button onClick={editararticulo} className="fondo1">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateArt;
