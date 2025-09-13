import {
  index,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("conoce", "routes/conoce.tsx"),
  route("estructura", "routes/estructura.tsx"),
  route("difusion", "routes/difusion.tsx"),
  route("educacion", "routes/educacion.tsx"),
  route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
