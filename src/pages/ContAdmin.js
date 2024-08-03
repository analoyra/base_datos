import React from "react";
import './contacto.css';

const ContactoPage = (props) => {
  return (
    
    <main className="holder">
       <div className="contenedor">
        <div className="contacto">
          <h2>Contacto:</h2>
          <form action="" method="" class="formulario">
            <p>
              <input
                type="text"
                placeholder="Ingrese su nombre"
                id="nombre"
                name="nombre"
              />
            </p>
            <p>
              <input
                type="email"
                placeholder="Ingrese su email"
                id="email"
                name="email"
              />
            </p>
            <p>
              <textarea
                id="msg"
                placeholder="Deje su mensaje"
                name="mensaje"
              ></textarea>
              <button type="submit">Enviar</button>
            </p>
          </form>
        </div>

        <div className="contacto">
          <h2>Otras vias de comunicación:<br /></h2>
          <ul>
            <li><i className="fa-brands fa-facebook"></i> puntoz</li>  

            <li><i className="fa-brands fa-instagram"></i> puntz</li>

            <li><i className="fa-brands fa-square-whatsapp"></i>2914134744</li>

            <li><i className="fa-solid fa-envelope"></i> aloyra@gmail.com</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ContactoPage;
