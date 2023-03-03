import Footer from "layouts/Footer";
import Navbar from "./components/layout/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import routes from "./routes/routes";
import PageNotFound from "pages/NotFoundPage";
import { Route, Routes, useParams } from "react-router-dom";
import routesAdmin from "routes/admin/routesAdmin";
import bgError from "assets/images/error.png";
import LoginPage from "pages/Admin/LoginPage";
import ContainerLayout from "layouts/admin/home/ContainerLayout";
import ListPage from "pages/Admin/ListPage";


function App() {
  const params = window.location.pathname;
  return (
    <>
      {params === "/" ? (
        <>
          <Routes>
            {/* Thay vì để Header chỗ này nó sẽ lun xuất hiện */}
            <Route path="/" element={<Navbar />}>
              {/* Đưa nó vào route để quản lí  - 1 route có thể chứa nhiều route con - Giống như 1 component chứa nhiều component con */}
              {routes?.map(({ path, component: Component }, index) => (
                <Route key={index} path={path} element={<Component />}></Route>
              ))}
            </Route>

            {/* Đây là not found */}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
          <Footer></Footer>
        </>
      ) : (
        <div className="w-full h-screen">
          <div className="md:hidden relative h-full flex justify-center items-center">
            <img
              src={bgError}
              alt="background"
              className="object-cover h-full"
            />
            <h2 className="absolute inline-block bg-red-700 p-5 rounded-xl text-white text-[18px] font-bold uppercase text-center">
              Chúng tôi hiện chưa hỗ trợ trên thiết bị này!
            </h2>
          </div>
          <div className="hidden md:block h-full ">
            <Routes>
              <Route
                path={"/admin"}
                element={<ContainerLayout></ContainerLayout>}
              >
                {routesAdmin?.map(({ path, element: Element, slug }, index) => (
                  <Route key={index} path={path} element={<Element />}>
                    {slug && (
                      <Route
                        path={`${path}/:slug`}
                        element={<ListPage />}
                      ></Route>
                    )}
                  </Route>
                ))}
              </Route>
              <Route path="/admin/login" element={<LoginPage />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </div>
        </div>
      )}

     
    </>
  );
}

export default App;
