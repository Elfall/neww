import React from 'react';
import { Wallet, GraduationCap, PieChart, Target, ChevronRight, Search, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const SidebarItem = ({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) => (
  <div className={`flex items-center space-x-3 p-2 rounded-lg ${active ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-purple-50'}`}>
    {icon}
    <span className="font-medium">{text}</span>
  </div>
);

const MetricCard = ({ title, value, change, trend }: { title: string; value: string; change: number; trend: 'up' | 'down' }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm">
    <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
    <div className="mt-2 flex items-center text-sm">
      <span className={`font-medium ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
      </span>
      <span className="ml-1 text-gray-500">vs last week</span>
    </div>
    <div className="mt-2 h-10 w-full bg-gray-100 rounded-full overflow-hidden">
      <div 
        className={`h-full ${trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`} 
        style={{width: `${Math.abs(change)}%`, transition: 'width 0.5s ease-in-out'}}
      ></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex h-screen bg-purple-50">
      <aside className="w-64 bg-white p-4 hidden md:block">
        <div className="flex items-center space-x-2 mb-6">
          <div className="bg-yellow-400 rounded-lg p-2">
            <Wallet className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">Finance & Edu</span>
        </div>
        <nav className="space-y-2">
          <SidebarItem icon={<Wallet className="h-5 w-5" />} text="Dashboard" active />
          <SidebarItem icon={<GraduationCap className="h-5 w-5" />} text="Scholarships" />
          <SidebarItem icon={<PieChart className="h-5 w-5" />} text="Investments" />
          <SidebarItem icon={<Target className="h-5 w-5" />} text="Goals" />
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your total balance</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Select Dates
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </header>
        <div className="text-4xl font-bold mb-8">
          <span className="text-purple-600">$12,750</span>
          <span className="text-yellow-400">.00</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MetricCard title="New subscriptions" value="22" change={15} trend="up" />
          <MetricCard title="New orders" value="320" change={-4} trend="down" />
          <MetricCard title="Avg. order revenue" value="$1,080" change={8} trend="up" />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Savings Goal</h2>
          <div className="flex justify-between items-end mb-2">
            <span className="text-3xl font-bold">$8,000</span>
            <span className="text-gray-500">of $10,000 goal</span>
          </div>
          <Progress value={80} className="h-2 mb-2" />
          <p className="text-sm text-gray-500">80% achieved</p>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent campaigns</h2>
            <Button variant="link" className="text-purple-600">
              View all
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Scholarship Application', 'Investment Strategy', 'Financial Literacy'].map((campaign, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold mb-2">{campaign}</h3>
                <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}