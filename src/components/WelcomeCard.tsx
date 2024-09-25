import React from 'react';
import { Card, CardContent } from "./ui/card";

const WelcomeCard = ({ balance, percentage }: { balance: number, percentage: number }) => {
  return (
    <Card className="w-full mb-6">
      <CardContent className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-indigo-800">Benvenuto, Marco!</h2>
        <p className="text-lg mb-4 text-indigo-600">Hai ricevuto nuovi fondi ultimamente? 🤑</p>
        <div className="text-4xl font-bold text-indigo-900">€{balance.toLocaleString()}</div>
        <p className="text-sm mt-1">
          {percentage >= 0 ? (
            <span className="text-green-600">+{percentage}% rispetto al mese scorso</span>
          ) : (
            <span className="text-red-600">{percentage}% rispetto al mese scorso</span>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;