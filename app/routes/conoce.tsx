import type { Route } from "./+types/conoce.ts";

export default function Conoce ({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 md:flex-row gap-6 justify-items-center p-5">
      <h1 className="font-sfm text-5xl">MANIFIESTO</h1>
      <p className="font-sfm text-2xl">El fin del mundo se construye todos los días, es una sucesión de eventos continuos, así
como los puntos que forman una línea que se extiende hasta el infinito. Seríamos muy
afortunados si un meteorito cayera ahora y acabara con todo en un instante.</p> 
      <p className="font-sfm text-2xl">No es nuestro propósito detener el fin del mundo. Esas cuestiones las pueden ver con Elon
Musk, Coca Cola y a los países que apoyan y perpetuan del genocidio en Palestina.</p>
      <p className="font-sfm text-2xl">Habitemos este fin desde el gozo, desde el descaro, desde el baile. Aquí, lo que sea que
vaya a ser el fin del mundo no nos va a agarrar trabajando, tratando de pagar nuestras
cuentas, viviendo en un mundo que han lastimado los políticos y las industrias, donde nos
han hecho pensar que es nuestra responsabilidad ponerle curitas para vivir dignamente,
para tener un poquito de felicidad. Aquí el fin del mundo nos va a agarrar bailando, dando
un beso, abrazándonos y aplaudiendo que este mundo terrible por fin se acaba.</p> 
      <p className="font-sfm text-2xl">Desde la organización invitamos a afiliarse para tejer nuevos mundos. Para que los
gentrificadores y los países del “primer mundo” se enojen y vengan a decirnos que no
sabemos nada sobre el mundo que ellos han creado ¿Para qué? para gozar y no trabajar,
para bailar y no para servirles, para ya no ser parte del engranaje que mantiene su mundo a
flote, para decirles miren, aquí vamos a aprovechar nuestro contenido perceptivo, intuitivo y
epifánico, aquí no vamos a hacer test de habilidades o de personalidades. Aquí nos vamos
a expandir hacia abajo, hacia el núcleo de la tierra, aquí no seremos rascacielos ni murallas,
aquí seremos bicicletas, triciclos y no coches o demoledoras.</p> 
      <p className="font-sfm text-2xl">Vean cómo nos ponemos sus uniformes y nos ponemos a disfrutar, los llenamos de glitter,
los ensuciamos con nuestras sucias manos que no saben nada del trabajo digno, de la
clase obrera, de esa clase a la que le ponen días y horarios para tomarse una chela, para
platicar con un amigo, días y horarios para olvidarse de la fábrica. Vean cómo hacemos
asambleas y un contrato colectivo y les pintamos el dedo a sus prácticas de abuso, de
poder.</p>
      <p className="font-sfm text-2xl">Aquí se inaugura el fin del mundo todos los días, porque cada que este mundo capitalista,
racista, sexista, machista, patriarcal, transfóbico y colonialista muere, se crea otro donde
esas palabras no existen y la tierra es fértil y lo único que nos pide es bailar.</p>
      <h1 className="font-sfm text-pink-500 text-5xl p-2">¿Por qué trabajar, si podemos bailar?</h1>

    </div>
  );
}