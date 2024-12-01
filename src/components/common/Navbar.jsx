import Topnav from "../common/Topnav";
import Sidebar from "../common/Sidebar";
import { useState } from "react";
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Topnav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
}
