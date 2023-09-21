import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBarAdmin from "../menu/NavBarAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/App.css";

function ListadoUsu() {
  const [data, setData] = useState([]);
  const Navegar = useNavigate();
  useEffect(() => {
    mostrarUsuarios();
  }, [setData]);

  const mostrarUsuarios = async () => {
    const usu = (await axios.get("https://proyectobf.onrender.com/ListadoUsu")).data;
    console.log(usu);
    setData(usu);
  };

  const eliminarUsu = async (idusu) => {
    axios
      .delete("https://proyectobf.onrender.com/EliminarUsu/" + idusu)
      .then((res) => {
        console.log(res.data);
        alert("Usuario deshabilitado");
        Navegar(0);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container bodyHome">
      <NavBarAdmin />
      <h3>Listado de Usuario</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Tipo Usuario</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.Nombre}</td>
                <td>{item.Apellido}</td>
                <td>{item.TipoUsuario}</td>
                <td>{item.Email}</td>
                <td>
                  <Link to={`/ModificarUsu/${item._id}`}>
                    <li className="btn">Editar</li>
                  </Link>
                  <button
                    className="btn "
                    onClick={() => {
                      eliminarUsu(item._id);
                    }}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
              // </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListadoUsu;
