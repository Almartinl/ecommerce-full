import './Servicios.css'

export default function Servicios(){
    return(
        <div className="wrap">
    <div className="servicios">
        <div className="serv-box">
            <img src="../../src/imagenes/iconos/pago.png" alt="pago" width="40px"/>
            <div className="text-serv">
              <span className="lead">Pago seguro</span>
              <p>100% garantizado</p>
            </div>
        </div>
        <div className="serv-box">
            <img src="../../src/imagenes/iconos/envio.png" alt="envio" width="40px"/>
            <div className="text-serv">
              <span className="lead">Envios gratis</span>
              <p>En pedidos de +100€</p>
            </div>
        </div>
        <div className="serv-box">
            <img src="../../src/imagenes/iconos/check.png" alt="check" width="40px"/>
            <div className="text-serv">
              <span className="lead">2 años de garantias</span>
              <p>En todos los gadgets</p>
            </div>
        </div>
        <div className="serv-box">
            <img src="../../src/imagenes/iconos/ofertas.png" alt="ofertas" width="40px"/>
            <div className="text-serv">
              <span className="lead">Ofertas unicas</span>
              <p>precios de mayorista</p>
            </div>
        </div>
    </div>
    </div>
    )
}