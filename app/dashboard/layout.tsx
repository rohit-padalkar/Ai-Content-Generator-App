import React from "react";
import SideNav from "./_components/SideNav";
import Head from "next/head";
import Header from "./_components/Header";

function dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" v-screen bg-violet-100">
      <div className=" md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default dashboardlayout;
