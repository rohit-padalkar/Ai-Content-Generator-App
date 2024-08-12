import { UserButton } from "@clerk/nextjs";
// import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex justify-end items-center">
      <UserButton></UserButton>
    </div>
  );
}

export default Header;
