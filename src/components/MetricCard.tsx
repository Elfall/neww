import React from 'react';
import { Card, CardContent } from "./ui/card";

const MetricCard = ({ title, value, change, icon }: { title: string, value: number, change: number, icon: React.ReactNode }) => (
  <Card className="bg-white shadow-lg">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-gray-700">{title}</div>
        <div className="p-2 bg-indigo-100 rounded-full">{icon}</div>
      </div>
      <div className="text-3xl font-bold mb-2 text-indigo-800">
        €{value.toLocaleString()}
      </div>
      <div className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change >= 0 ? '+' : ''}{change}% vs mese scorso
      </div>
    </CardContent>
  </Card>
);

export default MetricCard;