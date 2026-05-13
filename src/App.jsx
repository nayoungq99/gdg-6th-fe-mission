import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CategoryPage from './pages/CategoryPage';
import PricePage from './pages/PricePage';
import SortPage from './pages/SortPage';
import AdminPage from './pages/AdminPage';
// import CartPage from './CartPage';

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // 전체 페이지의 뼈대
    children: [
      {
        index: true, // path: '/' 와 동일
        Component: Content,
      },
      {
        path: "category",
        Component: CategoryPage,
      },
      {
        path: "price",
        Component: PricePage,
      },
      {
        path: "sort",
        Component: SortPage,
      },
      {
        path: "admin",
        Component: AdminPage,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;