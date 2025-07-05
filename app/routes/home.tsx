import { Navbar } from "~/components/navbar.tsx"
import type { Route } from "./+types/home.ts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SFM" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader() {
  return {
    message: "",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
    <Navbar />
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img src="/images/sfm_30-1.png" className="absolute opacity-20 w-1/2 h-auto pointer-events-none" style={{top: '15%', left: '30%'}} />
    </div>
    <p>{loaderData.message}</p>
    </div>
  )
}
