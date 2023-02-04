import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout/Layout";
import Home from "./views/home/Home";
import Productos from "./views/productos/Productos";
import About from "./views/about/About";
import Contacto from "./views/contacto/Contacto";
import Gadgets from "./views/gadgets/Gadgets";
import Ofertas from "./views/ofertas/Ofertas";
import Login from "./views/login/Login";
import DetallesProductos from "./views/detallesProducto/DetallesProducto";
import LayoutSteper from "./component/layoutSteper/LayoutSteper";
import Carrito from "./views/carrito/Carrito";
import FormaPago from "./views/formaPago/FormaPago";
import FinalizarPago from "./views/finalizarPago/FinalizarPago";
import Privacidad from "./views/privacidad/Privacidad";
import { AuthContextProvider } from "./contexts/AuthContext";
import Pedidos from "./views/pedidos/Pedidos";
import PrivateRoute from "./component/routes/PrivatRoute/PrivateRoute";
import { ROLES } from "./const/roles";
import AdminView from "./views/adminView/AdminView";
import Unauthorized from "./views/unauthorized/Unauthorized";
function App() {
  const [step, setStep] = useState(1);

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="productos" element={<Productos />} />
            <Route path="about" element={<About />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="gadgets" element={<Gadgets />} />
            <Route path="ofertas" element={<Ofertas />} />
            <Route path="detalleProducto/:id" element={<DetallesProductos />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="/privacidad" element={<Privacidad />} />
          </Route>
          <Route
            element={<PrivateRoute allowedRoles={[ROLES.Admin, ROLES.User]} />}
          >
            <Route path="/pedidos" element={<Pedidos />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin_view" element={<AdminView />} />
          </Route>
          <Route path="/carrito" element={<LayoutSteper activeStep={step} />}>
            <Route index element={<Carrito />} />
            <Route path="formaPago" element={<FormaPago estado={setStep} />} />
            <Route
              path="finalizarPago"
              element={<FinalizarPago estado={setStep} />}
            />
          </Route>

          <Route path="/login" element={<Layout menuLogin="menu disable" />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
