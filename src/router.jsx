import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import BookList from "./pages/book/BookList";
import AddBook from "./pages/book/AddBook";
import EditBook from "./pages/book/EditBook";
import SingleBookPage from "./pages/book/SingleBookPage";
import Layout from "./Layout";

const apiBase = "https://bookstore-backend-hm71.onrender.com"

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
        path :"book",      // Default route ("/")
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
      
     
    ],
  },
]);

export default router;
