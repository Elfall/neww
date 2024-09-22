"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { it } from 'date-fns/locale';

const Calendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const events = [
    { date: new Date(2023, 5, 15), title: 'Scadenza Borsa di Studio' },
    { date: new Date(2023, 5, 20), title: 'Pagamento Affitto' },
    { date: new Date(2023, 5, 25), title: 'Deposito Stipendio' },
  ];

  const prevMonth = () => setCurrentDate(date => new Date(date.getFullYear(), date.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(date => new Date(date.getFullYear(), date.getMonth() + 1, 1));

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold text-gray-800">Calendario Finanziario</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Calendar content */}
        {/* Add children prop to CardContent */}
        <div>{/* Render your calendar days or events here */}</div>
      </CardContent>
    </Card>
  );
};

export default Calendar;