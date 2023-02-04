import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Servicios from "../servicios/Servicios";


export default function Layout({menuLogin}){
    return(
        <>
            <Header disable = {menuLogin}/>
            <Outlet/>
            <Servicios/>
            <Footer/>
        </>
    )
}