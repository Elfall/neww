import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WalletCard = ({ title, balance, change, currency, color }: { title: string, balance: number, change: number, currency: string, color: string }) => (
  <Card className={`bg-gradient-to-br ${color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
    <CardContent className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">{title}</div>
        <div className={`text-sm ${change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      </div>
      <div className="text-3xl font-bold mb-2">
        {currency === '€' ? '€' : ''}{balance.toLocaleString()}{currency !== '€' ? ` ${currency}` : ''}
      </div>
      <div className="text-sm opacity-80">Saldo totale</div>
    </CardContent>
  </Card>
);

export default WalletCard;