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
    const usu = (await axios.get("http://localhost:5050/ListadoUsu")).data;
    console.log(usu);
    setData(usu);
  };

  const eliminarUsu = async (idusu) => {
    axios.delete('http://localhost:5050/EliminarUsu/'+idusu).then((res) => {
        console.log(res.data);
        alert("Usuario deshabilitado");
        Navegar(0);
      }).catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <NavBarAdmin />
      <h1>Listado de Usuarios</h1>
      <div className="ListarUsu">
        <table >
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Tipo Usuario</td>
              <td>Email</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            <div>
              {data.map((item) => (
                // <div key={item._id}>
                  <div className="col" key={item._id + 2}>
                    <tr>
                      <td>{item.Nombre}</td>
                      <td>{item.Apellido}</td>
                      <td>{item.TipoUsuario}</td>
                      <td>{item.Email}</td>
                      <td><div className="cardbottom">
                          <Link to={`/ModificarUsu/${item._id}`}><li className="btn cardbottom">Editar</li></Link> 
                          <button className="btn  cardbottom" onClick={()=>{eliminarUsu(item._id)}}>Borrar</button>
                          </div> 
                      </td>
                    </tr>
                  </div>
                // </div>
              ))}
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListadoUsu;
