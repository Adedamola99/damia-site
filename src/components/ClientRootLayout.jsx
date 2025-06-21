"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";

export default function ClientRootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen relative">
      <button
        onClick={toggleSidebar}
        className={`md:hidden text-3xl p-4 fixed w-full bg-background z-30 shadow-md ${
          isSidebarOpen ? "hidden" : "block"
        }`}
      >
        <AiOutlineMenu className="text-foreground" />
      </button>

      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:static md:translate-x-0 top-0 left-0 h-full transition-transform duration-300 ease-in-out z-20 bg-background shadow-lg w-48`}
      >
        <Sidebar />
      </div>

      <div
        className="flex-1 p-6 children overflow-auto scrollable-container"
        onClick={closeSidebar}
      >
        {children}
      </div>
    </div>
  );
}
