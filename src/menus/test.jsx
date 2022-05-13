import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import LeftMenusGeneralPrivilaged from "./leftmenusgeneralprivilaged";
import LeftMenusGeneralSupervisor from "./leftmenusgeneralsupervisor";
import LeftMenusGeneralUser from "./leftmenusgeneraluser";

const LeftMenusGeneral = () => {
  const user = useContext(AuthContext);
  const [role, setRole] = useState("");

  const roleType = user.user.role;
  const handleRole = (role) => {
    setRole(role);
  };
  // setRole(user.user.role);

  const LeftmenuBar = role !== roleType ? chooseRole(roleType) : null;

  return LeftmenuBar;
};

export default LeftMenusGeneral;

function chooseRole(role) {
  switch (role) {
    case "62286801eee4a6c17e5b1dd9":
      return <LeftMenusGeneralPrivilaged />;

    case "62286825eee4a6c17e5b1ddb":
      return <LeftMenusGeneralSupervisor />;
    case "62286813eee4a6c17e5b1dda":
      return <LeftMenusGeneralUser />;
    default:
      return <LeftMenusGeneralUser />;
  }
}

function roleIndex(role) {
  var answer = "";
  switch (role) {
    case 1:
      answer = "62286801eee4a6c17e5b1dd9";
      break;
    case 2:
      answer = "62286825eee4a6c17e5b1ddb";
      break;
    default:
      answer = "62286813eee4a6c17e5b1dda";
  }
  return answer;
}
