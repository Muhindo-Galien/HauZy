import Home from "../../initials/_noAuth/Home";

const noAuthRoutes = [
  {
    name: "HauZy - Home",
    path: "/",
    secured: false,
    exact: true,
    component: Home,
  },
];

export default noAuthRoutes;
