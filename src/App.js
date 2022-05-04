import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Row } from "react-bootstrap";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MenuBar from "./menus/menubar";
import PfmsRoutes from "./routes";
import { AuthProvider } from "./context/auth";
import { AuthContext } from "../src/context/auth";

const App = () => {
  const user = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <Row className="m-2">{user ? <MenuBar /> : null}</Row>

        <PfmsRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
