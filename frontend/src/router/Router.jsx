import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import GuestLayout from "../layout/GuestLayout";
import ClientsLayout from "../layout/ClientsLayout ";
import AdminLayout from "../layout//AdminLayout ";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import AddProduct from "../pages/Addproduct";
import UserTable from "../pages/users";
import WelcomeMessage from "../pages/WelcomePageUsers";
import WelcomeMessageAdmin from "../pages/WelcomePageAdmin";
import Profile from "../pages/profileinfo";
import Contact from '../pages/Contact'
import ForgotPassword from "../pages/forgotpassword";




export const router = createBrowserRouter([
 {
   path: "/",
   element: <GuestLayout />,
   children: [
     { path: "/", element: <Home /> },
     { path: "/login", element: <Login /> },
     { path: "/register", element: <Register /> },
     { path: "*", element: <NotFound /> },
     { path: "Contact", element: <Contact/> },
     { path: "/forgotpassword", element: <ForgotPassword /> },
   ],
 },
 {
   path: "/app",
   element: <ClientsLayout />,
   children: [
     { path: "/app", element: <WelcomeMessage /> },
     { path: "product", element: <Product /> },
     { path: "profileinfo", element: <Profile /> },
     { path: "Contact", element: <Contact/> },
     { path: "*", element: <NotFound /> },
     
   ],
 },
 {
   path: "/admin",
   element: <AdminLayout />,
   children: [
     { path: "/admin", element: <WelcomeMessageAdmin /> },
     { path: "product", element: <Product /> },
     { path: "addproduct", element: <AddProduct /> },
     { path: "Contact", element: <Contact/> },
     { path: "users", element: <UserTable /> },
     { path: "profileinfo", element: <Profile /> },
     { path: "*", element: <NotFound /> },
   ],
 },
]);