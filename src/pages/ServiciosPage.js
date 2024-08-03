import React from "react";
import './servicios.css';
const ServiciosPage = (props) => {
  return (
    <main className="holder">
     <div className="servicios">
        <img src="images/servicios/1.jpg" alt="3d" width="100" height="100"/>
        <div className="info">
            <h4> Impresion 3D</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores expedita beatae consectetur accusantium exercitationem id voluptates, dolor ullam laborum eaque, quas, deserunt eveniet? Veniam modi eveniet sapiente? Doloremque, enim?</p>
        </div>
        <img src="images/servicios/2.jpg" alt="laser" width="100" height="100"/>
        <div className="info">
            <h4> Grabado y corte laser</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi asperiores expedita beatae consectetur accusantium exercitationem id voluptates, dolor ullam laborum eaque, quas, deserunt eveniet? Veniam modi eveniet sapiente? Doloremque, enim?</p>
        </div>
      </div>
    </main>
  );
};

export default ServiciosPage;