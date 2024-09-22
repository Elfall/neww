import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';

const MetricCard = ({ title, value, change, currency = '€', icon }: { title: string, value: number, change: number, currency?: string, icon: React.ReactNode }) => (
  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-gray-700">{title}</div>
        <div className="p-2 bg-indigo-100 rounded-full">{icon}</div>
      </div>
      <div className="text-3xl font-bold mb-2 text-indigo-800">
        {currency}{value.toLocaleString()}
      </div>
      <div className={`text-sm flex items-center ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
        {Math.abs(change)}% vs mese scorso
      </div>
    </CardContent>
  </Card>
);

export default MetricCard;