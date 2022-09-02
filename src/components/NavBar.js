import CartWidget from "./CartWidget/CartWidget.js";
const navBar = () => {
    return (
    <div>
    <div className="header">
        <div className="logo">
            <img src="../img/Mountain.png" alt="Logo de la marca"></img>       
        </div>
        <nav>
           <ul className="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
           </ul>            
        </nav>
        <a className="btn" href="#"><button>Iniciar Sesion</button></a>
        <CartWidget/>
    
    </div>
    </div>
    
    ) 
};
export default navBar