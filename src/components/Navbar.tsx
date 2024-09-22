import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavItem = ({ children, active = false }: { children: React.ReactNode; active?: boolean }) => (
  <Button
    variant={active ? "default" : "ghost"}
    className={`rounded-full px-4 py-2 text-sm font-medium ${
      active ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-indigo-50'
    }`}
  >
    {children}
  </Button>
);

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white rounded-full shadow-md mb-8">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-2xl text-indigo-600">FIN4</span>
        <div className="hidden md:flex space-x-1">
          <NavItem>Education</NavItem>
          <NavItem>AIMe</NavItem>
          <NavItem active>Dashboard</NavItem>
          <NavItem>HUB</NavItem>
          <NavItem>Calendar</NavItem>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-700">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-700">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;