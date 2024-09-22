"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import WelcomeCard from '@/components/WelcomeCard';
import MetricCard from '@/components/MetricCard';
import WalletCard from '@/components/WalletCard';
import Calendar from '@/components/Calendar';
import FinancialGoals from '@/components/FinancialGoals';
import PortfolioDistribution from '@/components/PortfolioDistribution';
import FinancialTrends from '@/components/FinancialTrends';
import { Wallet, GraduationCap, PieChart as PieChartIcon, Target, ChevronRight, Search, Calendar as CalendarIcon, Filter as FilterIcon, Bell, MessageCircle, ArrowRight, ArrowUp as ArrowUpIcon, ArrowDown as ArrowDownIcon, Plus as PlusIcon, DollarSign, PiggyBank, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { it } from 'date-fns/locale';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
  const [balance, setBalance] = React.useState(12750);
  const percentage = 8.2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navbar />
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-indigo-800">Dashboard Finanziaria</h1>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-white hover:bg-indigo-50">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Seleziona Date
              </Button>
              <Button variant="outline" size="sm" className="bg-white hover:bg-indigo-50">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filtro
              </Button>
            </div>
          </div>

          <WelcomeCard balance={balance} percentage={percentage} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard title="Nuove Borse di Studio" value={5} change={15} currency="" icon={<GraduationCap className="w-6 h-6 text-indigo-600" />} />
            <MetricCard title="Risparmi Totali" value={3200} change={-4} icon={<PiggyBank className="w-6 h-6 text-indigo-600" />} />
            <MetricCard title="Media Spese Mensili" value={800} change={8} icon={<DollarSign className="w-6 h-6 text-indigo-600" />} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Calendar />
            <FinancialGoals />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-indigo-800">I tuoi Portafogli</h2>
              <Button variant="outline" size="sm" className="bg-white hover:bg-indigo-50">
                <PlusIcon className="w-4 h-4 mr-2" />
                Aggiungi
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <WalletCard title="Borse di Studio" balance={8500} change={1.24} currency="€" color="from-purple-500 to-indigo-600" />
              <WalletCard title="Risparmi" balance={3250} change={-0.5} currency="€" color="from-blue-500 to-cyan-600" />
              <WalletCard title="Investimenti" balance={1000} change={2.3} currency="€" color="from-green-500 to-teal-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PortfolioDistribution />
            <FinancialTrends />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                  <MessageCircle className="w-6 h-6 mr-2 text-indigo-500" />
                  Ultimo Consiglio da AIMe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Considera di allocare il 20% delle tue entrate mensili al fondo di emergenza.
                  Questo ti aiuterà a costruire una solida base finanziaria per imprevisti futuri."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                  <GraduationCap className="w-6 h-6 mr-2 text-indigo-500" />
                  Prossima Scadenza Borsa di Studio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  Borsa di Studio per l'Innovazione Tecnologica
                </p>
                <p className="text-sm text-gray-500">Scadenza: 15 Giugno 2023</p>
                <Button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white transition-all duration-200 ease-in-out transform hover:scale-105">
                  Visualizza Dettagli
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}