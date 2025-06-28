export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="font-bold">SFM</div>
      <div className="flex gap-4">
        <a href="/">Conoce al SFM</a>
        <a href="/estructura">Estructura</a>
        <a href="/difusion">Difusión</a>
        <a href="/educacion">Educación</a>
        <a href="/contacto">Contacto</a>
      </div>
    </nav>
  );
}
