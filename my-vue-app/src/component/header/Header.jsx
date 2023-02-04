import HeaderTop from "./headertop/headertop.jsx"
import Navbar from "./navbar/Navbar.jsx"
import "./header.css"
export default function Header({disable}){
    return(
        <div className="wrap container-fluid d-flex flex-column">
            <HeaderTop />
            <Navbar className={disable}/>
        </div>
    )
}