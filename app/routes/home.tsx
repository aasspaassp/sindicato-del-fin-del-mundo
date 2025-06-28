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
    <p>{loaderData.message}</p>
    </div>
  )
}
