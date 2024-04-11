import { useState } from "react";
import { Navbar } from "../../components/supplier/navbar.jsx";
import { Sidebar } from "../../components/supplier/sidebar.jsx";
// import AdminExperiences from "./experiences";
// import AdminAchievements from "./achievements";
// import AdminPosts from "./createEditManagePosts";
// import { DashboardItems } from "./dashboardItems";

export default function SupplierDashboard() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [userPage, setsetUserPage] = useState("dashboard");

  return (
    <>
      <div className="flex bg-violet-100">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setsetUserPage={setsetUserPage}
        />
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>

      <div className="bg-violet-100">
        {/* {userPage === "dashboard" && <DashboardItems sidebarToggle={sidebarToggle} setsetUserPage={setsetUserPage} />}
        {userPage === "posts" &&  <AdminPosts sidebarToggle={sidebarToggle} setsetUserPage={setsetUserPage} />}
        {userPage === "achievements" && <p> <AdminAchievements sidebarToggle={sidebarToggle} /> </p>}
        {userPage === "experiences" && <p> <AdminExperiences sidebarToggle={sidebarToggle} /> </p>} */}
      </div>

      <section>
        <h1 className="text-3xl text-black font-bold text-center">Supplier's Dashboard will go here</h1>
      </section>
    </>
  );
}