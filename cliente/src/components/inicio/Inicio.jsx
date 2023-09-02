import "../../assets/css/App.css";
import { Link } from 'react-router-dom';
import NavBarAdmin from '../menu/NavBarAdmin';


function Inicio() {
  return (
    <div className="bodyHome">
       <div className="bodyPage">
        {/* <Logingreso/> */}
        <NavBarAdmin/> </div>
      
      <div >
        <h1>PAGINA DE INICIO</h1>
        <Link to="/Home">
            <button className="btn btn-dark mb-10">Ingresar</button>
        </Link>
     </div>
      
    </div>
  );
}
export default Inicio;