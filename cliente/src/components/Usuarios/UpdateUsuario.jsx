import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import NavBarAdmin from "../menu/NavBarAdmin";


function UpdateUsuario() {
  const params = useParams();
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
//   const [TipoUsuario, setTipoUsuario] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
//   const [EstUsuario, setEstUsuario] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    axios
      .patch("http://localhost:5050/ModificarUsu/" + params.id)
      .then((res) => {
        let dataUsuario = res.data;
        // console.log('Data del articulo',dataArticulo.data.name)
        setNombre(dataUsuario.data.Nombre);
        setApellido(dataUsuario.data.Apellido);
        // setTipoUsuario(dataUsuario.data.TipoUsuario);
        setEmail(dataUsuario.data.Email);
        setPassword(dataUsuario.data.Password);
        // setEstUsuario(dataUsuario.data.EstUsuario);
      });
  }, {});

  function editarusuario() {
    const usuariomodif = {
        Nombre :Nombre,
        Apellido:Apellido,
        // TipoUsuario:TipoUsuario,
        Email:Email,
        Password:Password,
        // EstUsuario: EstUsuario,
    }

    axios
      .patch("http://localhost:5050/ModificarUsu/" + params.id, usuariomodif)
      .then((res) => {
        console.log(res.data)
        alert("Usuario Actualizado con éxito")
        navegar("/")
      })
  }

  return (
    <div className="container bodyPage">
     <NavBarAdmin /> 
     <div className="row">
        <h2> Modificar Usuario</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <form className="formContacto">
              <div>
                <label className="labelContacto" htmlFor="Nombre">
                  Nombre:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="Nombre"
                  value={Nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="Apellido">
                  Apellido:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="Apellido"
                  value={Apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="Email">
                  Email:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="labelContacto" htmlFor="Password">
                  Password:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div> 
              <button onClick={editarusuario} >
                Guardar Modificación
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUsuario;