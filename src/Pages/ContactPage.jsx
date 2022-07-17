import React from "react";
import AppBarContact from "../Components/AppBars/AppBarContact";
import MainLayout from "../Components/AppLayouts/MainLayout";

const ContactPage = () => {
  const { AppLayout } = MainLayout();
  return <>{AppLayout(AppBarContact)}</>;
};

export default ContactPage;
