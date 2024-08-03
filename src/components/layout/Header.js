import "./header.css";
const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img
          src="images/home/logo.jpg"
          alt="Punto Z"
          height="100"
          width="100"
          class="logo"
        />

        <h1>PUNTO Z</h1>
        <div className="header2">
          Impresiones 3D <br />
          Corte y grabados láser
        </div>
      </div>
    </header>
  );
};

export default Header;
