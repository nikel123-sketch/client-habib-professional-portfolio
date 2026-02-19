import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import About from "../pages/HomePage/About";
import Skills from "../pages/HomePage/Skills";
import Experience from "../pages/HomePage/Experience";
import Contact from "../pages/HomePage/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "About",
        Component: About,
      },
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "experience",
        Component: Experience,
      },
      {
        path: "contact",
        Component:Contact
      },
    ],
  },
]);
