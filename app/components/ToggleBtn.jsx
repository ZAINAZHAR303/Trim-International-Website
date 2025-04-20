"use client";

import React from "react";
import useMenuStore from "../store/menuStore"; // Import the Zustand store

const ToggleBtn = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu); // Access global toggle function
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen); // Access global state

  console.log("ToggleBtn: isMenuOpen =", isMenuOpen); // Debugging: Log the state
  console.log("ToggleBtn: toggleMenu =", toggleMenu); // Debugging: Log the function

  return (
    <button
      className="relative z-400 text-black hover:cursor-pointer"
      onClick={() => {
        console.log("Toggle button clicked, isMenuOpen =", isMenuOpen); // Debugging: Log when the button is clicked
        toggleMenu(); // Call the global toggle function
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default ToggleBtn;