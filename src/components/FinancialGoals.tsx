import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FinancialGoals = () => {
  const goals = [
    { name: 'Fondo Emergenza', current: 3000, target: 5000 },
    { name: 'Risparmio Vacanze', current: 1500, target: 3000 },
    { name: 'Fondo Studi', current: 7000, target: 10000 },
  ];

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">Obiettivi Finanziari</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{goal.name}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {Math.round((goal.current / goal.target) * 100)}%
                    </span>
                  </div>
                  <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Obiettivo: €{goal.target.toLocaleString()}</p>
                <p>Attuale: €{goal.current.toLocaleString()}</p>
                <p>Mancano: €{(goal.target - goal.current).toLocaleString()}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </CardContent>
    </Card>
  );
};

export default FinancialGoals;