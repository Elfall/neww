import React from 'react';
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white rounded-full shadow-md mb-8">
      <span className="font-bold text-2xl text-indigo-600">FIN4</span>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm">Dashboard</Button>
        <Avatar>
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;