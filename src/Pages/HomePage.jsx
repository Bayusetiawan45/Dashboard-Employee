import React from "react";
import AppBarHome from "../Components/AppBars/AppBarHome";
import MainLayout from "../Components/AppLayouts/MainLayout";

const HomePage = () => {
  const { AppLayout } = MainLayout();
  return <>{AppLayout(AppBarHome)}</>;
};

export default HomePage;
