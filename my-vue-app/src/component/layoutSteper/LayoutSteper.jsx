import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Servicios from "../servicios/Servicios";
import Steper from "../steper/Steper";


export default function LayoutSteper({activeStep}){
    const getStepClass = (step) => {
        if (step === activeStep) {
          return 'botones activo';
        } else {
          return 'botones inactivo';
        }
    }

    return(
        <>
            <Steper carrito={getStepClass(1)} formaPago={getStepClass(2)} finPedido={getStepClass(3)}/>
            <Outlet/>
            <Servicios/>
            <Footer/>
        </>
    )
}