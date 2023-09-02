import "../../assets/css/App.css";
// import "../../assets/css/stylegrup.css";
import { Link } from 'react-router-dom';
import NavBarAdmin from '../menu/NavBarAdmin';
import DataGrup from "./DataGrup";

function Nosotros() {
  return (
    <div className="container">
                <NavBarAdmin/>
        <p>PAGINA ACERCA DE NOSOTROS</p>
       {/*  {info.map((item, index) => (
      <DataGrup
        key={index}
        img={item.img}
        nombre={item.nombre}
        github={item.github}
        ocupación={item.ocupación}
        meta={item.meta}
      />
    ))} */}
    </div>
   
  );
}

export default Nosotros;