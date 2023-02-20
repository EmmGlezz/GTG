import React from "react";

import SidebarTop from "./sidebartop";
import SideCat from "./sidebar-cat";
import Sidebottom from "./sidebottom";

function Sidebar() {
  return (
    <div className="bg-black Sidebar">
      <div>
        <SidebarTop />
        <SideCat />
      </div>
      <div>
        <Sidebottom />
      </div>
    </div>
  );
}

export default Sidebar;
