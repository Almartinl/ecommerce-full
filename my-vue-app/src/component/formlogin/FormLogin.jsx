import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import "./Formlogin.css";

export default function FormLogin() {
  const navigate = useNavigate()
  const { login, authorization } = useAuthContext()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    if (authorization) {
      navigate("/")
    }

  }, [authorization])



  // const navigate = useNavigate()
  // const [login, setLogin] = useState({
  //   email: "",
  //   password: "",
  // });

  // function handleLogin(event) {
  //   const newLogin = {
  //     ...login,
  //     [event.target.name]: event.target.value,
  //   };
  //   setLogin(newLogin);
  // }

  // function checkLogin(event) {
  //   event.preventDefault();
  //   fetch("http://localhost:3000/user/login", {
  //     method: "POST",
  //     headers: { "content-Type": "application/json" },
  //     body: JSON.stringify(login),
  //   }).then((response) => {
  //     console.log(response.status);
  //     if (response.status == 400) {
  //       alert("error al recibir el body");
  //     } else if (response.status == 200) {
  //       navigate("/");
  //       setNewUsuario(initialUserState)
  //     } else if (response.status == 404) {
  //       alert("usuario no registrado");
  //     } else if (response.status == 401) {
  //       alert("usuario o contraseña incorrecta")
  //     }
  //   })
  // }

  return (
    <div>
      <section className="formulario">
        <form method="post" onSubmit={(e) => login(e, user)}>
          <h3>Iniciar sesion</h3>
          <h4>Accede con tus datos</h4>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleInput}
            value={user.email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleInput}
            value={user.password}
          />
          <div id="error"></div>
          <button type="submit" className="botones-especiales">
            Iniciar Sesion
          </button>
        </form>
      </section>
    </div>

    // <div>
    //   <section className="formulario">
    //     <form method="post" onSubmit={checkLogin}>
    //       <h3>Iniciar sesion</h3>
    //       <h4>Accede con tus datos</h4>
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         placeholder="email"
    //         onChange={handleLogin}
    //         value={login.email}
    //       />
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         placeholder="password"
    //         onChange={handleLogin}
    //         value={login.password}
    //       />
    //       <div id="error"></div>
    //       <button type="submit" className="botones-especiales">
    //         Iniciar Sesion
    //       </button>
    //     </form>
    //   </section>
    // </div>
  );
}
