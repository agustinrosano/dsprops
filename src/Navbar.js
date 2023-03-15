
import './Navbar.css';

function Navbar() {
  return (
    <>
      <section className="pre-header">
        <ul className="menu">
              <li><a href="https://www.instagram.com/ds.propiedades/"> <i class="bi bi-instagram"></i> ds.propiedades</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5491127532372&text=Hola+Quisiera+pedir+un+presupuesto..++&type=phone_number&app_absent=0"><i class="bi bi-whatsapp"></i> +54 9 112753 2372</a></li>
          </ul>
      </section>
      <header className="header">
      
          <a href="#home" className="logo"> DS propiedades</a>

          <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>

      </header>
    </>
  );
}

export default Navbar;
