import Logo from "../logo/Logo";
import './Steper.css'


export default function Steper({carrito,formaPago,finPedido}) {
  return (
    <div className="wrap header-inner">
      <Logo />
      <div className="proceso-de-pago">
        <span className={carrito}>🛒 Carrito</span>
        <i className="bi bi-arrow-right-circle"></i>
        <span className={formaPago}>💳 Forma de pago</span>
        <i className="bi bi-arrow-right-circle"></i>
        <span className={finPedido}>🏦 Finalizar pago</span>
      </div>
    </div>
  );
}
