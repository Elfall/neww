import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const WelcomeCard = ({ balance, percentage }: { balance: number, percentage: number }) => {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
      <CardContent className="p-6 flex justify-between items-start">
        <div>
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
        </div>
        <div className="w-1/3">
          <Tabs defaultValue="earn" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-indigo-100 rounded-full p-1">
              <TabsTrigger value="earn" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-indigo-600">
                Earn
              </TabsTrigger>
              <TabsTrigger value="borrow" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-indigo-600">
                Borrow
              </TabsTrigger>
            </TabsList>
            <TabsContent value="earn" className="mt-4">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-4 space-y-4">
                  {/* Earn content */}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="borrow" className="mt-4">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-4 space-y-4">
                  {/* Borrow content */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;