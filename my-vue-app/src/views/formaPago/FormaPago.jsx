import { Link } from 'react-router-dom'
import '../../styles/FormaPago.css'

export default function FormaPago({estado}){
    document.title = 'Forma de pago'
    return(
        <main className="wrap" onLoad={estado(2)}>
        <div className='titulo-pago'>
            <h1>Forma de pago</h1>
            <Link to="/productos" className='botones'>Seguir comprando</Link>
        </div>
        <section className='formadepago'>
        <div className="tarjetas">
                <h3>Mis tarjetas</h3>
                <div>
                    <input type="radio" name="tarjeta" value="1111" id="1111"/>
                        <label for="1111">💳 Mastercard...1111</label>
                </div>
                <div>
                    <input type="radio" name="tarjeta" value="2222" id="2222"/>
                        <label for="2222">💳 Mastercard...2222</label>
                </div>
                <div>
                    <input type="radio" name="tarjeta" value="3333" id="3333"/>
                        <label for="3333">💳 Mastercard...3333</label>
                </div>
                <Link to="/carrito/finalizarPago" className='botones-especiales'>Pagar con esta tarjeta</Link>
        </div>
        <div className='form-tarjeta'>
            <form>
            <h3>Añadir nueva tarjeta</h3>
                <input type="text" name="tarjeta" id="tarjeta" placeholder="💳Numero de tarjeta"/>
                <br/>
                <input type="text" name="titular" id="titular" placeholder="👨Titular de la tarjeta"/>
                <br/>
                <input className='form-tarjeta tarjeta-mes' type="month" min="2022-09" name="caducidad" id="caducidad" placeholder="📅caducidad"/>
                <input className='form-tarjeta tarjeta-pass'  type="password" maxlength="3" name="codigo-seguro" id="codigo" placeholder="🔐codigo seguro"/>
                <Link to="##" className='botones-especiales'>Añadir a mis tarjetas</Link>
            </form>
        </div>
        </section>
    </main>
    )
}