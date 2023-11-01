import { useRef } from "react";

export function ValidationForm() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameRef.current.validity.valid) {
      alert("esto no es un email");
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input type="email" ref={nameRef} id="name" />
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}
