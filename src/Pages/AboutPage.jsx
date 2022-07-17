import React from "react";
import AppBarAbout from "../Components/AppBars/AppBarAbout";
import MainLayout from "../Components/AppLayouts/MainLayout";

const AboutPage = () => {
  const { AppLayout } = MainLayout();
  return <>{AppLayout(AppBarAbout)}</>;
};

export default AboutPage;
