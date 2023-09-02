import React, { useState, useEffect } from "react";
import axios from "axios";

const validaLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5050/iniciarSesionRouter", {
          withCredentials: true,
        });

        if (response.data.isLoggedIn) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkLoginStatus();
  }, []);

  return isLoggedIn ? <h1>User is logged in.</h1> : <h1>User is not logged in.</h1>;
};

export default validaLogin;