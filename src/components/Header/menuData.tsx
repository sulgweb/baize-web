import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: "home",
    title: "主页",
    path: "/",
    newTab: false,
  },
  {
    id: "imageCompress",
    title: "图片压缩",
    path: "/image-compress",
    newTab: false,
  },
  {
    id: "baizeToolbox",
    title: "白泽工具箱",
    path: "/baize-toolbox",
    newTab: false,
  },
  {
    id: "about",
    title: "关于",
    path: "/about",
    newTab: false,
  },
  {
    id: "support",
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: "more",
    title: "More",
    newTab: false,
    submenu: [
      {
        id: "",
        title: "VUE & REACT & 微前端",
        path: "/quick-study",
        newTab: false,
      },

      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
