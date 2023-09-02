import { Link } from "react-router-dom";
import "../../assets/css/App.css";
const NavBarHome = () => {
  return (
      <div className="container-fluid header">
        <div className="row">
          <div className="col-lg-8">
            <img
              className="m-2 logoHeader"
              src="/img/logo.png"
              alt="Logo empresa"
            />
          </div>
         
          <div className="col-lg-4">
          <nav className="Navbar ">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid ">
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item menuHome">
                      <Link
                        to={"/login"}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Ingresar
                      </Link>
                    </li>
                    <li className="nav-item menuHome">
                      <Link
                        to={"/RegistrarUsu"}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Registrarse
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

export default NavBarHome;
