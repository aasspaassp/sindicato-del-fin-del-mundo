import type { Route } from "./+types/home.ts";
import HomeAnimations from "../components/homeAnimation.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SFM" },
    { name: "description", content: "Sindicato del Fin del Mundo" },
  ];
}


export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
    <HomeAnimations></HomeAnimations>
    </div>
  )
}
