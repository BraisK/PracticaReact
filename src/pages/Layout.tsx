import { Link, Outlet } from "react-router-dom";

const Footer = () => (
  <footer>
    Pagina creada por Brais
    <Link className="m-4" to="/">Volver</Link>
  </footer>
);

function Layout() {
  return (
    <main className="flex flex-col grow">
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
