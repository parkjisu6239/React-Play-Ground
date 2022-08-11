import Page from "src/components/pages";

const menu = [
  {
    id: "home",
    path: "/",
    name: "Home",
    component: Page.HomePage
  },
  {
    id: "about",
    path: "/about",
    name: "About",
    component: Page.AboutPage
  },
  {
    id: "render-props",
    path: "/render-props",
    name: "Render Props",
    component: Page.RenderPropsPage
  },
  {
    id: "use-ref",
    path: "/use-ref",
    name: "useRef",
    component: Page.UseRefPage
  }
];

export default menu;
