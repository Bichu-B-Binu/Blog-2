import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";

const Dashboard = () => {
  const [tab, setTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className=" md:w-56">
        <DashSidebar />
        {/* sideBar */}
      </div>
      <div className="">
        {tab === "profile" && <DashProfile />}
        {/* profile */}
        {/* posts... */}
        {tab === "posts" && <DashPosts />}
        {/* users */}
        {tab === "users" && <DashUsers />}
        {/* comments  */}
        {tab === "comments" && <DashComments />}
        {/* dashboard comp */}
        {tab === "dash" && <DashboardComp />}
      </div>
    </div>
  );
};

export default Dashboard;
