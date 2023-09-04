import React from "react";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import NavBarAdmin from '../menu/NavBarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/App.css";


function CatalogOtrosart() {  
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
      const api = ( await axios.post("http://localhost:5050/CatalogOtrosart")).data; 
    //   console.log(api);
      setDatapi(api);
  }

    const mostrarArtApi = async ()=>{  
        const resapi = ( await axios.get("http://localhost:5050/CatalogoDataApi")).data; 
        // console.log(resapi);
        setData(resapi);
    }

    /* const eliminarArt =async (idArt , token)=>{    
        await axios.delete('http://localhost:5050/EliminarArt/'+idArt).then(res=>{
            console.log(res.data);
            alert('Articulo desactivado')
            Navegar(0)
        }).catch(error=>console.log(error))
    } */
return (
<div className="container bodyHome">
<NavBarAdmin />

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
                         {/*<buttonGroup>
                            <div className="cardbottom">
                                <Link to={`/ModificarArt/${item._id}`}><li className="btn cardbottom">Editar</li></Link>  
                                <button className="btn  cardbottom" onClick={()=>{eliminarArt(item._id )}}>Borrar</button>
                            </div> 
                            </buttonGroup>*/}
                                           
                    </div>
                    </div>
            );
        })}  
       </div>
</div>
);
}
export default CatalogOtrosart;