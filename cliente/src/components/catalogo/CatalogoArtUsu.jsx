import React from "react";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import NavBarUsuario from '../menu/NavBarUsuario';
import '../../assets/css/App.css';

function CatalogoArtUsu() {  
    const [ data , setData] = useState ([]);
    const Navegar = useNavigate()
    useEffect( ()=>{
        mostrarArt();
    }, [setData]);

    const mostrarArt = async ()=>{  
        const art = ( await axios.get("http://localhost:5050/CatalogoArtUsu")).data; 
        console.log(art);
        setData(art);
    }

    function eliminarArt(idArt){  
        axios.delete('http://localhost:5050/api/'+idArt).then(res=>{
            console.log(res.data);
            alert('Articulo desactivado')
            Navegar(0)
        }).catch(error=>console.log(error))
    }

return (

<div className="container bodyHome">
<NavBarUsuario />
    <h2>Catalogo de Articulos</h2>
    <div> 
        {data.map ((item) => {
            return (
                <div className="cardart" key={item._id+1}>
                    <div className="row" key={item._id+2}>
                        <div key={item._id} className="col-sm-6 offset-3">
                            <img src={item.ImagenArticulo} alt={item.NombArticulo} width="200px" className="imgCat" />
                            <p className="txtcardart">Nombre : {item.NombArticulo}</p>
                            <p className="txtcardart">Tipo  : {item.TipoArticulo}</p>
                            <p className="txtcardart">Cantidad  : {item.StockArticulo}</p>
                            <p className="txtcardart">Precio  : {item.PrecioArticulo}</p>
                             {/* http://localhost:3000/img/zarc1.jepg  */}
                            <Link to={`/Modificar/${item._id}`}><li className="btn btn-primary">Agregar al Carrito</li></Link> 
                            <button className="btn btn-primary" onClick={()=>{eliminarArt(item._id)}}>Eliminar del Carrito</button>
                           
                            </div>
                            
                    </div>
                    </div>
            );

        })}
    </div>
</div>
);
}
export default CatalogoArtUsu;