import CenterTopImage from "./CenterTopImage.tsx";

export function Navbar() {
  return (
    <nav className="flex flex-col items-center p-4 gap-4 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 border-b-4 border-black border-t-4 border-black">
      <CenterTopImage />
      <div className="flex gap-6 justify-center">
        <a className='hover:underline' href="/conoce">Conoce al SFM</a>
        <a className='hover:underline' href="/estructura">Estructura</a>
        <a className='hover:underline' href="/difusion">Difusión</a>
        <a className='hover:underline' href="/educacion">Educación</a>
        <a className='hover:underline' href="/contacto">Contacto</a>
      </div>
    </nav>
  );
}
