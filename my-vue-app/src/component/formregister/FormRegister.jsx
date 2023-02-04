import { useState } from "react";
import "./Formregister.css";
const initialUserState = {
  name: "",
  surname: "",
  email: "",
  password: "",
};
export default function FormRegister() {
  const [newUsuario, setNewUsuario] = useState(initialUserState);

  function handleInput(e) {
    const newRegistro = {
      ...newUsuario,
      [e.target.name]: e.target.value,
    };
    setNewUsuario(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-Type": "multipart/form-data" },
      body: newUsuario,
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        alert("usuario registrado correctamente");
        setNewUsuario(initialUserState);
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });

    // fetch("http://localhost:3000/user", {
    //   method: "POST",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(newUsuario),
    // }).then((response) => {
    //   console.log(response.status);
    //   if (response.status == 400) {
    //     alert("error al recibir el body");
    //   } else if (response.status == 200) {
    //     alert("usuario registrado correctamente");
    //     setNewUsuario(initialUserState)
    //   } else if (response.status == 409) {
    //     alert("usuario ya registrado");
    //   }
    // });
  }

  return (
    <div className="register">
      <section className="formulario">
        <form onSubmit={registrar}>
          <h3>Registrate</h3>
          <h4>
            Crea una cuenta en Flash Padel para conseguir <br /> tu primer
            descuento como cliente
          </h4>
          <div className="nombre">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={newUsuario.name}
              onChange={handleInput}
            />
          </div>
          <div className="apellido">
            <input
              type="text"
              name="surname"
              value={newUsuario.surname}
              onChange={handleInput}
              placeholder="Apellidos"
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              value={newUsuario.email}
              onChange={handleInput}
              placeholder="Email"
            />
          </div>
          <div className="pass">
            <input
              type="password"
              name="password"
              value={newUsuario.password}
              onChange={handleInput}
              placeholder="Contraseña"
            />
          </div>
          <button type="onSubmit" className="botones-especiales">
            Crear cuenta ahora
          </button>
        </form>
      </section>
    </div>
  );
}
