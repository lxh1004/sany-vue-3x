/**
 * 静态路由表
 */

const routes = [
  {
    path: "/",
    redirect: {
      path: "/login",
    },
  },
  {
    path: "/home",
    name: "home",
    redirect: {
      path: "/home/project",
    },
    component: () => import("@/views/home"),
    children: [
      {
        path: "/home/user",
        name: "user",
        component: () => import("@/views/user"),
        meta: {
          title: "用户管理",
        }
      },
      {
        path: "/home/project",
        name: "project",
        component: () => import("@/views/project"),
        meta: {
          title: "项目管理",
        }
      },
    ]
  },

  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "*",
    redirect: {
      path: "/404",
    },
  },
];

export default routes;
