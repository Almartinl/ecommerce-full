import { useState } from "react";

export default function AdminView() {
  document.title = "Admin";

  const [img, setImg] = useState(null);

  function handleInput(e) {
    setImg(e.target.files[0]);
  }

  function registrar(e) {
    e.preventDefault();
    console.log(img.name);
    // fetch("http://localhost:3000/user", {
    //   method: "POST",
    //   headers: { "content-Type": "multipart/form-data" },
    //   body: ne,
    // }).then((response) => {
    //   console.log(response.status);
    //   if (response.status == 400) {
    //     alert("error al recibir el body");
    //   } else if (response.status == 200) {
    //     alert("usuario registrado correctamente");
    //     setNewUsuario(initialUserState);
    //   } else if (response.status == 409) {
    //     alert("usuario ya registrado");
    //   }
    // });
  }

  return (
    <div className="wrap">
      <form onSubmit={registrar}>
        <input type="file" onChange={handleInput} />
        {img ? (
          <button type="submit">añadir imagen</button>
        ) : (
          <button disabled type="submit">
            añadir imagen
          </button>
        )}
      </form>
    </div>
  );
}
