import React from "react";

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Financegram</h1>
      <nav className="space-x-4">
        <a href="#" className="text-sm text-gray-600 hover:text-black">Home</a>
        <a href="#" className="text-sm text-gray-600 hover:text-black">Community</a>
        <a href="#" className="text-sm text-gray-600 hover:text-black">Profile</a>
      </nav>
    </header>
  );
}

export default Header;