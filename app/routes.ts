import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("Conoce al SFM", "routes/conoce.tsx"),
  route("Estructura", "routes/estructura.tsx"),
  route("Difusión", "routes/difusion.tsx"),
  route("Educación", "routes/educacion.tsx"),
  route("Contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
