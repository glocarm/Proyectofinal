import "../../assets/css/App.css";
import NavBarUsuario from "../menu/NavBarUsuario";

function Homeusu() {
  return (
    <div className="container bodyHome">
      <NavBarUsuario/>
      <div className="col-lg-8 txtHome">
        <p>
          El diseño de accesorios es una modalidad del diseño que requiere de
          mucha personalidad, inspiración y creatividad. Esto se debe a que son
          aquellos accesorios que ayudan a complementar cualquier look y, por lo
          tanto, muchas veces ayudarán a destacar.
        </p>
      </div>
        <div className="col-lg-12">
          <img className="imgHome" src="http://localhost:3000/img/dijeshome1.png"  alt="Logo" />
        </div>
    </div>
  );
}

export default Homeusu;