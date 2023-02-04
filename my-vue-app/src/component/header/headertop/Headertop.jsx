import "./Headertop.css"
import Logo from "../../logo/Logo.jsx"


export default function HeaderTop({logo}){
    return(
        <div className="header-inner" id="header">
            <Logo logo={logo}/>
            <div className="buscar">
            <input type="search" name="buscar" id="search" placeholder="Buscar"/>
            </div>
            <div className="carrito">
            <a href="/carrito"><span className="text-carrito">🛒 Carrito</span><span className="contador">0</span></a>
            </div>  
        </div>
    )
    };