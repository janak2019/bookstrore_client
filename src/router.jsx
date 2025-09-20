import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import BookList from "./pages/book/BookList";
import AddBook from "./pages/book/AddBook";
import EditBook from "./pages/book/EditBook";
import SingleBookPage from "./pages/book/SingleBookPage";
import Layout from "./layouts/Layout";
import Contact from "./pages/contact/Contact"
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

const apiBase = "http://localhost:5000"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // The main layout wrapper
    children: [
      {
        index: true,      // Default route ("/")
        element: <Home />,
      },
      {
        path :"book-list",      // Default route ("/")
        element: <BookList apiBase={apiBase}/>,
      },
      {
        path:"add-book",      // Default route ("/")
        element: <AddBook apiBase={apiBase}/>,
      },
      {
        path:"edit-book/:id",      // Default route ("/")
        element: <EditBook apiBase={apiBase}/>,
      },
      {
        path:"books/:id",      // Default route ("/")
        element: <SingleBookPage apiBase={apiBase}/>,
      },
      
      {
        path:"contact",      // Default route ("/")
        element: <Contact apiBase={apiBase}/>,
      },
      {
        path:"admin",      // Default route ("/")
        element: <Login apiBase={apiBase}/>,
      },
      
      
     
    ],
  },
  {
        path:"/admin/dashboard",
        element:<AdminDashboard/>
      }
]);

export default router;
