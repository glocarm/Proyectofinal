// import './Contactanos.css';
import "../../assets/css/App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarHomeIng from "../menu/NavBarHomeIng";
import axios from "axios";

function Registrousuario() {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [TipoUsuario, setTipoUsuario] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EstUsuario, setEstUsuario] = useState("");
  const navegar = useNavigate();
  function registrarusu() {
    const newusu = {
      Nombre: Nombre,
      Apellido : Apellido,
      TipoUsuario: TipoUsuario,
      Email : Email,
      Password: Password,
      EstUsuario: EstUsuario,
    };
    axios
      .post("https://proyectobf.onrender.com/RegistrarUsu", newusu)
      .then((res) => console.log(res.data))
      .then((error) => console.log(error));
    alert("Usuario registrado con Exito");
    navegar(0);
  }

  return (
    <div className="container bodyPage">
      <NavBarHomeIng/> 
      <div className="row">
        <h2> Registro de Usuario</h2>
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
                  Tipo Usuario :
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="TipoUsuario"
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
                  type="password"
                  id="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div> 
              <div>
                <label className="labelContacto" htmlFor="EstUsuario">
                  Estatus Usuario:
                </label>
                <input
                  className="inputContacto"
                  type="text"
                  id="EstUsuario"
                  value="ACTIVO"
                  onChange={(e) => setEstUsuario(e.target.value)}
                  required
                />
              </div>
              <button onClick={registrarusu} >
                Registrar Usuario
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrousuario;
