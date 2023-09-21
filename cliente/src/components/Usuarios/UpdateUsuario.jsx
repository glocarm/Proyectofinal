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
  const [TipoUsuario, setTipoUsuario] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    axios
      .patch("http://localhost:5050/ModificarUsu/" + params.id)
      .then((res) => {
        let dataUsuario = res.data;
        setNombre(dataUsuario.data.Nombre);
        setApellido(dataUsuario.data.Apellido);
        setTipoUsuario(dataUsuario.data.TipoUsuario);
        setEmail(dataUsuario.data.Email);
        setPassword(dataUsuario.data.Password);
      });
  }, {});
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function editarusuario() {
    const usuariomodif = {
        Nombre :Nombre,
        Apellido:Apellido,
        TipoUsuario:TipoUsuario,
        Email:Email,
        Password:Password,
       
    }
    axios
      .patch("https://proyectobf.onrender.com/ModificarUsu/" + params.id, usuariomodif)
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
                <label className="labelContacto" htmlFor="TipoUsuario">
                  Tipo Usuario:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="TipoUsuario"
                  placeholder="ADMIN-ROLE /  USER-ROLE"
                  value={TipoUsuario}
                  onChange={(e) => setTipoUsuario(e.target.value)}
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
                  type="Password"
                  id="Password"
                  value={Password}
                  onChange={handlePasswordChange}
                  required
                />
              </div> 
              <button  onClick={editarusuario} >
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