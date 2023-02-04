import { Link } from "react-router-dom"
import "./Logo.css"
import Logopadel from "../../imagenes/LogoPadel.png"

export default function Logo(){
    return(
        <div className="logo">
            <Link to="/"><img src={Logopadel}alt="MY STORE" width="80px"/></Link>
            <h1>Flash Padel</h1>
        </div>
    )
}