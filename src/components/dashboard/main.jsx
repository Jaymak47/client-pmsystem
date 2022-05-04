import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import MainDashBoard from "./systemadmin/systemadmindashboard";
import SupervisorDashboard from "./supervisor/supervisordashboard";
import UserDashBoard from "./user/userdashboard";

function MainHome() {
  const { dashState, setDashstate } = useState();
  const user = useContext(AuthContext);

  function chooserole() {
    if (user.user.role === "62286801eee4a6c17e5b1dd9") {
      return <MainDashBoard />;
    } else if (user.user.role === "62286825eee4a6c17e5b1ddb") {
      return <SupervisorDashboard />;
    } else {
      return <UserDashBoard />;
    }
  }

  const LeftmenuBar = chooserole();

  return LeftmenuBar;
}

export default MainHome;
