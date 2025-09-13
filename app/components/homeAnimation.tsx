import LetrasSvg from "./LetrasSvg.tsx"
import CirculoSVG from "./circuloSVG.tsx"
import CuadrosSVG from "./cuadrosSVG.tsx"
import ImageCard from "./ImageCard.tsx"

export default function HomeAnimations() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 md:flex-row gap-6 justify-items-center">
            <h2 className="font-sfm text-5xl bg-linear-to-bl text-pink-100 from-purple-950 from-80% to-pink-300 p-10 w-screen text-center">¡Por tu derecho al baile!</h2>

            <h1 className="font-sfm text-5xl">SINDICATO DEL FIN DEL MUNDO</h1>
            <p className="text-5xl text-center p-10">Integrado por los defensores de la confederación Mexicana Contra el Trabajo Asalariado SECCIÓN 32</p>
            <p className="text-4xl text-center p-10">Miembros de la comitiva internacional a favor del fin del mundo y el baile como actividad primordial para habitarlo</p>
            <ImageCard buttonText="🌎Únete al Sindicato"><CirculoSVG className="hover:fill-purple-500 w-50 h-50 text-gray-700 group-hover:text-purple-500 transition-colors duration-300" /></ImageCard>
            <ImageCard buttonText="⚡Donar pasos de baile"><CuadrosSVG className="hover:fill-pink-500 w-50 h-50 text-gray-700 group-hover:text-purple-500 transition-colors duration-300" /></ImageCard>
            <ImageCard buttonText="💖Miembros"><LetrasSvg className="hover:fill-purple-600 w-50 h-50 text-gray-700 group-hover:text-purple-500 transition-colors duration-300" /></ImageCard>

        </div>
    )
}