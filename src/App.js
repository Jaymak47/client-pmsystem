import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import PfmsRoutes from "./routes";
import { AuthProvider } from "./context/auth";
import { AuthContext } from "../src/context/auth";

const App = () => {
  const user = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <PfmsRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
