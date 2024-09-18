import React from 'react';
import { Wallet, GraduationCap, PieChart, Target, ChevronRight, Search, Calendar, Filter, Bell, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NavItem = ({ children, active = false }: { children: React.ReactNode; active?: boolean }) => (
  <Button
    variant={active ? "default" : "ghost"}
    className={`rounded-full px-4 py-2 text-sm font-medium ${
      active ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-white/20'
    }`}
  >
    {children}
  </Button>
);

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

const ChatMessage = ({ sender, content, image }: { sender: 'ai' | 'user', content: string, image?: string }) => (
  <div className={`flex items-start space-x-2 ${sender === 'user' ? 'justify-end' : ''}`}>
    {sender === 'ai' && (
      <Avatar>
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AIMe" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
    )}
    <div className={`rounded-lg p-3 max-w-[80%] ${sender === 'ai' ? 'bg-gray-100' : 'bg-blue-100'}`}>
      <p className="text-sm mb-2">{content}</p>
      {image && <img src={image} alt="Chat image" className="rounded-md w-full h-auto" />}
    </div>
    {sender === 'user' && (
      <Avatar>
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    )}
  </div>
);

const ChatSummaryCard = () => (
  <Card className="w-full overflow-hidden">
    <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <CardTitle>Conversazione con AIMe</CardTitle>
      <CardDescription className="text-purple-100">Riepilogo dell'ultima interazione</CardDescription>
    </CardHeader>
    <CardContent className="p-6 space-y-4">
      <ChatMessage 
        sender="ai" 
        content="Basandomi sul tuo profilo, ho identificato alcune opportunità interessanti. Ecco un'immagine che riassume le tue opzioni di borsa di studio:" 
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-NdDQvHfYvHhZbRHi5nNWNfWzqLhKEe.png"
      />
      <ChatMessage 
        sender="user" 
        content="Grazie! Puoi darmi più dettagli sulla borsa di studio per l'innovazione tecnologica?" 
      />
      <ChatMessage 
        sender="ai" 
        content="Certamente! La borsa di studio per l'innovazione tecnologica offre €10,000 ed è rivolta a studenti di Informatica o Ingegneria. La scadenza è il 15 Giugno 2023. Ecco i principali requisiti:" 
      />
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
        <h4 className="font-semibold mb-2">Ultimi consigli:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Prepara un progetto innovativo nel campo della tecnologia</li>
          <li>Evidenzia le tue esperienze pratiche e competenze tecniche</li>
          <li>Richiedi almeno due lettere di raccomandazione dai tuoi professori</li>
        </ul>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <MessageCircle className="mr-2 h-4 w-4" /> Continua la conversazione
      </Button>
    </CardFooter>
  </Card>
);

const ScholarshipCard = () => (
  <Card className="w-full overflow-hidden">
    <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
      <CardTitle>Opportunità di Borse di Studio</CardTitle>
      <CardDescription className="text-blue-100">Borse di studio e premi consigliati per te</CardDescription>
    </CardHeader>
    <CardContent className="p-6 space-y-6">
      {[
        {
          title: "Borsa di Studio per l'Innovazione Tecnologica",
          amount: "€10,000",
          description: "Per studenti in Informatica o Ingegneria con progetti innovativi",
          deadline: "15 Giugno 2023",
          progress: 75,
          color: "from-orange-500 to-red-500"
        },
        {
          title: "Premio Giovani Ricercatori",
          amount: "€5,000",
          description: "Per progetti di ricerca innovativi in qualsiasi campo scientifico",
          deadline: "30 Luglio 2023",
          progress: 40,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "Borsa di Studio per Studi all'Estero",
          amount: "€8,000",
          description: "Per un semestre di studio in un'università partner internazionale",
          deadline: "1 Maggio 2023",
          progress: 90,
          color: "from-purple-500 to-indigo-500"
        }
      ].map((scholarship, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4 transition-all hover:shadow-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{scholarship.title}</h3>
            <Badge variant="secondary" className="text-lg font-semibold">{scholarship.amount}</Badge>
          </div>
          <p className="text-sm text-gray-600 mb-3">{scholarship.description}</p>
          <div className="flex justify-between items-center">
            <span className="flex items-center text-sm text-gray-500">
              <Calendar className="mr-1 h-4 w-4" /> Scadenza: {scholarship.deadline}
            </span>
            <div className="w-1/3">
              <Progress 
                value={scholarship.progress} 
                className={`h-2 bg-gradient-to-r ${scholarship.color}`} 
              />
            </div>
          </div>
        </div>
      ))}
    </CardContent>
    <CardFooter className="bg-gray-50">
      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white group">
        <GraduationCap className="mr-2 h-4 w-4" /> 
        Esplora tutte le opportunità
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardFooter>
  </Card>
);

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-purple-50">
      <div className="bg-gradient-to-r from-pink-200 to-cyan-200 p-2">
        <nav className="flex items-center justify-between px-4 py-2 bg-white/50 backdrop-blur-md rounded-full shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-xl flex items-center space-x-2">
              <span className="text-2xl">×</span>
              <span>FIN4</span>
            </div>
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
      </div>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white p-4 hidden md:block">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChatSummaryCard />
            <ScholarshipCard />
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
    </div>
  );
}