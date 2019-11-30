import React from "react";

import components from "./styles";

const SideBarComponent = () => {
  const { SideBar, SideBarItem } = components;

  return (
    <SideBar>
      <SideBarItem>Zaloguj</SideBarItem>
      <SideBarItem> Twoja Lista</SideBarItem>
      <SideBarItem>Pieczywo</SideBarItem>
      <SideBarItem>Zupka</SideBarItem>
    </SideBar>
  );
};
export default SideBarComponent;
