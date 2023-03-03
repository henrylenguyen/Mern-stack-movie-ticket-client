

import AdminHomePage from "pages/Admin/AdminHomePage";
import ListPage from "pages/Admin/ListPage";
const routesAdmin = [
  {
    path: "/admin/home",
    element: AdminHomePage,
  },
  {
    path: "/admin/danh-sach",
    element: ListPage,
    slug: true
  },
];
export default routesAdmin;
