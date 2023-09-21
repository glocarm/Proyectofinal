import React from "react";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import NavBarUsuario from '../menu/NavBarUsuario';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/App.css";

//CATALOGO OTROS ARTICULOS PARA USUARIOS TIPO USER-ROLE

function CatalogOtrosartUsu() {  
    const [ data , setData] = useState ([]);
    const [ datapi , setDatapi] = useState ([]);
    const Navegar = useNavigate()
    

    useEffect( ()=>{
      guardaDataApi();
    }, [setDatapi]);

    useEffect( ()=>{
        mostrarArtApi();
    }, [setData]);

    const guardaDataApi = async ()=>{  
      const api = ( await axios.post("https://proyectobf.onrender.com/CatalogOtrosart")).data; 
    //   console.log(api);
      setDatapi(api);
  }

    const mostrarArtApi = async ()=>{  
        const resapi = ( await axios.get("https://proyectobf.onrender.com/CatalogoDataApi")).data; 
        // console.log(resapi);
        setData(resapi);
    }
return (
<div className="container bodyHome">
 <NavBarUsuario /> 

     <h2>Catalogo de Otros Articulos (API)</h2>
    <div> 
    {data.map ((item) => {
            return (
                <div className="cardart" key={item._id+1}>
                    <div className="row" key={item._id+2}>
                        <div key={item._id} className="col-sm-6 offset-3">
                            <p><img src={item.images[0]} alt={item.title} width="200px" className="imgCat" /></p>
                            <p className="txtcardart">Nombre : {item.title}</p>
                            <p className="txtcardart">Categoria  : {item.category.name}</p>
                            <p className="txtcardart">Precio  : {item.price}</p>
                             {/* http://localhost:3000/img/zarc1.jepg   */}  
                        </div>                          
                    </div>
                    </div>
            );
        })}  
       </div>
</div>
);
}
export default CatalogOtrosartUsu;