import Login from "../views/login";
import About from "../views/about";
import MyLayout from "../layout";

export default [
  // {
  //     path: '/',
  //     name: 'Login',
  //     redirect: '/Login',
  //     meta: { require: false }
  // },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { require: false },
  },
  {
    path: "",
    name: "Layout",
    redirect: "/login",
    component: MyLayout,
    children: [
      {
        path: "/about",
        name: "About",
        redirect: "/about",
        icon: "mail",
        component: About,
        meta: { require: true },
      },
      {
        path: "/one1",
        name: "one",
        icon: "appstore",
        redirect: "/about",
        children: [
          {
            path: "/about",
            name: "About",
            icon: "setting",
            redirect: "/about",
            component: About,
            meta: { require: true },
          },
        ],
      },
    ],
  },
];
