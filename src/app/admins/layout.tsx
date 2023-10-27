import React from "react";
import AdminHeader from "../components/view/Header/AdminHeader";

const AdminLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
};

export default AdminLayouts;
