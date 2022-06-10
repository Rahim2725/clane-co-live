import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Navbar>
      <Routes>

        {
          publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))
        }

        <Route element={<PrivateRoute />}>
          {
            privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component></Component>} />
            ))
          }
          <Route>

            <Route element={<AdminRoute />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="Add-admin" element={<AddAdmin />}></Route>
                <Route path="Add-service" element={<AddService />}></Route>
              </Route>
            </Route>

          </Route>
        </Route>
      </Routes>
      <ToastContainer/>
    </Navbar>
  );
}

export default App;
