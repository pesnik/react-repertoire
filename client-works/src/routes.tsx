import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Transaction from "./pages/Transaction/Transaction";
import P4VC from "./pages/P4VC/P4VC";
import MainLayout from "./layouts/MainLayout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="p4vc" element={<P4VC />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;