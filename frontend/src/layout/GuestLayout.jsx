import React, { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import Nav from '../assets/nav';
import Footer from '../assets/footer';

function GuestLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
      // User is authenticated, redirect to the appropriate layout
      const data = JSON.parse(accessToken);
      const role = data.role; // Get the user's role from the response

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/app');
      }
    } else {
      // User is not authenticated, redirect to the login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default GuestLayout;