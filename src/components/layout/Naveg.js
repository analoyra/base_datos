
import './nav.css';
import { Link } from "react-router-dom";


const Naveg = (props) => {
    return (
        <nav> 
            <div>
                <ul>
                    <li><Link to="/"> HOME</Link></li>
                    <li><Link to="/nosotros"> NOSOTROS</Link></li>
                    <li><Link to="/galeria"> GALERIA</Link></li>
                    <li><Link to="/servicios"> SERVICIOS</Link></li>
                    <li><Link to="/contacto"> CONTACTO</Link></li>
                    <li><Link to="/login"> LOGIN</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Naveg;