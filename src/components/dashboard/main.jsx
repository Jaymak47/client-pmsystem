import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import MainDashBoard from "./systemadmin/systemadmindashboard";
import SupervisorDashboard from "./supervisor/supervisordashboard";
import UserDashBoard from "./user/userdashboard";
import LoadingPage from "../Loading";

function MainHome() {
  const { dashState, setDashstate } = useState();
  const user = useContext(AuthContext);

  const role = user.user.role;
  const LeftmenuBar = user ? chooseRole(role) : null;

  return LeftmenuBar;
}

export default MainHome;

function chooseRole(role) {
  switch (role) {
    case "62286801eee4a6c17e5b1dd9":
      return <MainDashBoard />;

    case "62286825eee4a6c17e5b1ddb":
      return <SupervisorDashboard />;
    case "62286813eee4a6c17e5b1dda":
      return <UserDashBoard />;
    default:
      return <LoadingPage />;
  }
}
