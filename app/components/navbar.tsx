export function Navbar() {
  return (
    <nav className="flex justify-center p-5 gap-4 bg-linear-to-tl from-purple-900 from-80% to-pink-300">
      
      <div className="flex flex-col md:flex-row gap-10">
        <a href="/" className='font-sfm  text-pink-100 hover:text-purple-500'>SFM</a>
        <a className='font-sfm  text-pink-100 hover:text-purple-500' href="/conoce">Nosotrxs</a>
        <a className='font-sfm text-pink-100 hover:text-purple-500' href="/estructura">Estructura</a>
        <a className='font-sfm  text-pink-100 hover:text-purple-500' href="/difusion">Difusión</a>
        <a className='font-sfm  text-pink-100 hover:text-purple-500' href="/educacion">Educación</a>
        <a className='font-sfm  text-pink-100 hover:text-purple-500' href="/contacto">Contacto</a>
      </div>
    </nav>
  );
}
