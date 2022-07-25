import TaksViews from "../views/TaksViews";
import FormTaskViews from "../views/FormTaskViews";
import LoginViews from "../views/LoginViews";
import NotFoundViews from "../views/NotFoundViews";
import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;
interface Routes {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Login = lazy(() => import("../views/LoginViews"));

export const routes: Routes[] = [
  {
    to: "/",
    path: "/",
    Component: TaksViews,
    name: "Home"
  },
  {
    to: "/create",
    path: "/create",
    Component: FormTaskViews,
    name: "Create"
  },
  {
    to: "/edit/:id",
    path: "/edit/:id",
    Component: FormTaskViews,
    name: "Edit"
  },
  {
    to: "/login",
    path: "/login",
    Component: Login,
    name: "Login"
  },
  {
    to: "*",
    path: "*",
    Component: NotFoundViews,
    name: "NotFound"
  }
];
