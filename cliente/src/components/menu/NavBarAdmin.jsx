import { Link } from "react-router-dom";
import "../../assets/css/App.css";
const NavBarAdmin = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="m-2 logoHeader"
              src="/img/logo.png"
              alt="Logo empresa"
            />
          </div>         
          <div className="col-lg-8">
          <nav className="Navbar menuAdmin">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid opcionesmenu">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        to={"/RegistrarArt"}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Articulos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/ListadoUsu"}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Usuarios
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/CatalogoArt"}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Catalogo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/CatalogOtrosart"}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Mas Articulos..
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to={"/"}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Salir
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </nav>
          </div>
         
        </div>
      </div>
   
  );
};

export default NavBarAdmin;
