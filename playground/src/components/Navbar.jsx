import { NavLink } from "react-router-dom";
import image from "./image.png";

const Navbar = () => {
    return (
        <div className="nav-container">
            <NavLink className="nav-home" to="/" activeClassName="active" exact>{/*especificando la ruta de cada opción de la barra de navegación*/}
                Home
            </NavLink>
            <NavLink className="nav-imc" to="/imc" activeClassName="active">
                IMC Calculator
            </NavLink>
            <NavLink className="nav-age" to="/age" activeClassName="active">
                Age Calculator
            </NavLink>
            <img src={image} alt="Kruger" className="nav-image"></img>
            <p className="nav-kruger">KrugerStar</p>
            <NavLink className="nav-clock" to="/clock" activeClassName="active">
                My Clock
            </NavLink>
            <NavLink className="nav-about" to="/about" activeClassName="active">
                About Me
            </NavLink>
            <NavLink className="nav-contact" to="/contact" activeClassName="active">
                Contact
            </NavLink>
        </div>
    );
}

export default Navbar;