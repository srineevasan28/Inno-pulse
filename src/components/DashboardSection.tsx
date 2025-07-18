
import React from 'react';
import MetricCard from './MetricCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Award, TrendingUp, Database, Rocket, Globe, Clock } from "lucide-react";

const patentData = [
  { year: '2018', patents: 780, investments: 5.2 },
  { year: '2019', patents: 890, investments: 6.1 },
  { year: '2020', patents: 950, investments: 6.8 },
  { year: '2021', patents: 1050, investments: 8.5 },
  { year: '2022', patents: 1120, investments: 9.2 },
  { year: '2023', patents: 1245, investments: 12.4 },
];

const regionData = [
  { name: 'North America', patents: 2850, investments: 32.6 },
  { name: 'Europe', patents: 2340, investments: 28.4 },
  { name: 'Asia-Pacific', patents: 3450, investments: 36.8 },
  { name: 'Latin America', patents: 780, investments: 8.2 },
  { name: 'Africa', patents: 420, investments: 4.6 },
];

// Format date to a readable string
const formatLastUpdated = () => {
  const now = new Date();
  return now.toLocaleString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const lastUpdated = formatLastUpdated();

const DashboardSection = () => {
  return (
    <section id="dashboard" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovation Analytics Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track key innovation indicators across regions and time periods to identify trends and opportunities for policy intervention.
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 mt-3">
            <Clock className="h-4 w-4 mr-1" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <MetricCard
            title="Patent Filings"
            value="1,245"
            description="New patents filed in the last quarter"
            trend="up"
            trendValue="+11.2%"
            icon={<FileText className="h-5 w-5 text-innovation-500" />}
            className="animate-fade-in"
          />
          <MetricCard
            title="R&D Investment"
            value="$12.4B"
            description="Total investments in research and development"
            trend="up"
            trendValue="+34.8%"
            icon={<Database className="h-5 w-5 text-innovation-500" />}
            className="animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          />
          <MetricCard
            title="Startups Founded"
            value="438"
            description="New entrepreneurial ventures launched"
            trend="up"
            trendValue="+5.8%"
            icon={<Rocket className="h-5 w-5 text-innovation-500" />}
            className="animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Tabs defaultValue="time">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Innovation Trends</h3>
              <TabsList>
                <TabsTrigger value="time">Time Series</TabsTrigger>
                <TabsTrigger value="region">Regional</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="time" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={patentData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '8px',
                      borderColor: '#eaeaea'
                    }} 
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="patents" name="Patent Filings" fill="#0087ff" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="investments" name="R&D Investments ($B)" fill="#00d7c0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="region" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '8px',
                      borderColor: '#eaeaea'
                    }} 
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="patents" name="Patent Filings" fill="#0087ff" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" dataKey="investments" name="R&D Investments ($B)" fill="#00d7c0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-innovation-500 mr-3" />
                <h3 className="text-xl font-bold">Top Performing Sectors</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-medium">Biotechnology</span>
                  <span className="text-innovation-600 font-bold">94.2</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-medium">Clean Energy</span>
                  <span className="text-innovation-600 font-bold">89.7</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-medium">Artificial Intelligence</span>
                  <span className="text-innovation-600 font-bold">87.3</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-medium">Fintech</span>
                  <span className="text-innovation-600 font-bold">82.9</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Advanced Manufacturing</span>
                  <span className="text-innovation-600 font-bold">78.5</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-innovation-500 mr-3" />
                <h3 className="text-xl font-bold">Global Innovation Index</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">United States</span>
                    <span className="text-gray-500">92.4</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-innovation-500 h-full rounded-full" style={{ width: '92.4%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Switzerland</span>
                    <span className="text-gray-500">90.3</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-innovation-500 h-full rounded-full" style={{ width: '90.3%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Sweden</span>
                    <span className="text-gray-500">88.7</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-innovation-500 h-full rounded-full" style={{ width: '88.7%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">United Kingdom</span>
                    <span className="text-gray-500">87.6</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-innovation-500 h-full rounded-full" style={{ width: '87.6%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Singapore</span>
                    <span className="text-gray-500">86.5</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-innovation-500 h-full rounded-full" style={{ width: '86.5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
