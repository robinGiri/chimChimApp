import { Route, Routes } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import App from "../App";

const routes = [
  { path: "/", element: <App /> },
  { path: "/explore", element: <h1>Home</h1> },
  { path: "/request-products", element: <h1>Home</h1> },
  { path: "/men", element: <h1>Home</h1> },
  { path: "/women", element: <h1>Home</h1> },
  { path: "/kids", element: <h1>Home</h1> },
  { path: "/sale", element: <h1>Home</h1> },
];

export default function TheRouter() {
  return (
    <div className="flex flex-col">
      <div>
      {/* <TheNavbar /> */}
      </div>
      <div>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}