// src/App.jsx
import React, { useEffect } from "react";
import { Router, RouterProvider } from "react-router-dom";
import router from "./router";
import { getUser } from "./store/slices/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers } from "./store/slices/userSlice"
import { fetchAllBooks } from "./store/slices/bookSlice"


function App() {
  const { user,loading, isAuthenticated } = useSelector((state) => state.auth);
const dispatch = useDispatch();

useEffect(() => { 
    
    if(isAuthenticated && user?.role ==="Admin"){
      dispatch(getUser());
     dispatch(fetchAllBooks());
    
      dispatch(fetchAllUsers());
      
    }
   }, [isAuthenticated]);
   if(loading) return<div>Loading...</div>
  

  return <RouterProvider router={router} />;
}

export default App;
