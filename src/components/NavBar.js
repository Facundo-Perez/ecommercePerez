import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget.js";
import '../App.css';
const navBar = () => {
    return (
    <div>
    <div className="header">
        <div className="logo">
            <NavLink to={'/'}> <img src="../img/Mountain.png" alt="Logo de la marca"></img> </NavLink>  
        </div>
        
        <nav className="navegacion">
           <ul className="nav-links menu">
                <li><NavLink to={'/'} style={{textDecoration:'none'}}>Inicio</NavLink></li>
                <li><NavLink to={'/store'} style={{textDecoration:'none'}}>Tienda</NavLink></li>
                <li><NavLink to={'/about'} style={{textDecoration:'none'}}>Sobre Nosotros</NavLink></li>
                <li><NavLink to={'/category'} style={{textDecoration:'none'}}>Categorias</NavLink>
					<ul className="submenu">
						<li><NavLink to={'/category/Amateur'} style={{textDecoration:'none'}}>Amateur</NavLink></li>
						<li><NavLink to={'/category/Profesional'} style={{textDecoration:'none'}}>Profesional</NavLink></li>
					</ul>
				</li>
           </ul>            
        </nav>
        <NavLink to={'/SignIn'} style={{textDecoration:'none'}}><button>Iniciar Sesion</button></NavLink>
        <CartWidget/>
    
    </div>
    </div>
    
    ) 
};
export default navBar