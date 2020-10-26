import { ComponentType } from "react"
import { HomePage } from "../pages/HomePage"
import { TypographyPage } from "../pages/TypographyPage"
import { FormsPage } from "../pages/FormsPage"
import { ColorsPage } from "../pages/ColorsPage"
import { SurfacesPage } from "../pages/SurfacesPage"

export type Route = {
  path: string
  component: ComponentType<any>
  title: string
  exact: boolean
}

export type Redirect = {
  from: string
  to: string
  exact: boolean
}

const Redirects: Redirect[] = [
  {
    from: "/",
    to: "/home",
    exact: true
  }
]

const Routes: Route[] = [
  {
    path: "/home",
    component: HomePage,
    title: "Home",
    exact: true
  },
  {
    path: "/typography",
    component: TypographyPage,
    title: "Typography",
    exact: false
  },
  {
    path: "/forms",
    component: FormsPage,
    title: "Forms",
    exact: false
  },
  {
    path: "/colors",
    component: ColorsPage,
    title: "Colors",
    exact: false
  },
  {
    path: "/surfaces",
    component: SurfacesPage,
    title: "Surfaces",
    exact: false
  }
]

export { Routes, Redirects }
