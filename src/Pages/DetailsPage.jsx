import React from "react";
import AppBarDetail from "../Components/AppBars/AppBarDetail";
import MainLayout from "../Components/AppLayouts/MainLayout";

const DetailsPage = () => {
  const { AppLayout } = MainLayout();
  return <>{AppLayout(AppBarDetail)}</>;
};

export default DetailsPage;
