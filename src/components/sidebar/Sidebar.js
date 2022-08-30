import React from "react";
import ChatsList from "./chatsList/ChatsList";
import SidebarHeader from "./sidebarHeader/SidebarHeader";
import SearchBar from "./searchBar/SearchBar";
import classes from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={classes.wrapper}>
      <SidebarHeader />
      <SearchBar />
      <ChatsList />
    </aside>
  );
};

export default Sidebar;
