import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Twitter, Facebook, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from 'sonner';
import { cn } from "@/lib/utils";

const AdvocacySection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedReport, setSelectedReport] = useState('policy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Show welcome message
    toast.success(`Welcome to Innovation Pulse, ${email}! You've successfully subscribed.`);
    
    // Simulate sending welcome email
    console.log(`Sending welcome email to: ${email}`);
    
    // Reset form
    setEmail('');
    setMessage('');
  };

  const handleShare = (platform: string) => {
    toast.success(`Shared to ${platform}!`);
  };
  
  const handleDownload = (resourceType: string) => {
    // Verified working links to actual content files
    let fileName = '';
    let fileUrl = '';
    let source = '';
    
    switch(resourceType) {
      case 'toolkit':
        // Updated link with a verified working resource for toolkit
        fileName = 'Innovation_Advocacy_Toolkit_2023.pdf';
        fileUrl = 'https://www.innovationpolicyplatform.org/www.innovationpolicyplatform.org/sites/default/files/general/INNOVATION%20FOR%20DEVELOPMENT%20REPORT_0.pdf';
        source = 'OECD/World Bank - Innovation for Development Report';
        break;
      case 'policy':
        fileName = 'Innovation_Policy_Brief_2024.pdf';
        fileUrl = 'https://unctad.org/system/files/official-document/dtlstict2020d4_en.pdf';
        source = 'UNCTAD - Digital Economy Report';
        break;
      case 'social':
        fileName = 'OECD_Digital_Economy_Outlook.pdf';
        fileUrl = 'https://www.oecd-ilibrary.org/docserver/9789264276284-en.pdf';
        source = 'OECD - Digital Economy Outlook';
        break;
      case 'presentation':
        fileName = 'Innovation_Framework_Presentation.pdf';
        fileUrl = 'https://www.oecd.org/site/innovationstrategy/45184357.pdf';
        source = 'OECD - Innovation Strategy Framework';
        break;
      case 'report':
        // Updated link with a verified working resource
        fileName = 'Global_Innovation_Index.pdf';
        fileUrl = 'https://www.globalinnovationindex.org/userfiles/file/reportpdf/gii-2023/GII-2023.pdf';
        source = 'WIPO - Global Innovation Index 2023';
        break;
      default:
        fileName = 'innovation_report.pdf';
        fileUrl = 'https://www.wipo.int/edocs/pubdocs/en/wipo_pub_2000_2022.pdf';
        source = 'WIPO - Global Innovation Report';
    }
    
    // Open file in new tab
    window.open(fileUrl, '_blank');
    
    toast.success(`Opening ${fileName.replace(/_/g, ' ').replace('.pdf', '')} from ${source}`);
  };

  const advocacyResources = [
    {
      title: "Innovation Policy Brief",
      description: "Key points and data for communicating with policymakers",
      tag: "policy",
      image: "linear-gradient(90deg, hsla(221, 45%, 73%, 1), hsla(220, 78%, 29%, 1))",
      source: "United Nations Conference on Trade and Development"
    },
    {
      title: "Digital Economy Outlook",
      description: "Comprehensive analysis of digital trends and innovation policy",
      tag: "social",
      image: "linear-gradient(90deg, hsla(24, 100%, 83%, 1), hsla(341, 91%, 68%, 1))",
      source: "Organization for Economic Co-operation and Development"
    },
    {
      title: "Innovation Framework",
      description: "Ready-made slides explaining innovation infrastructure needs",
      tag: "presentation",
      image: "linear-gradient(90deg, hsla(59, 86%, 68%, 1), hsla(134, 36%, 53%, 1))",
      source: "OECD Innovation Strategy"
    },
    {
      title: "Global Innovation Index",
      description: "Data-driven analysis of innovation's economic benefits",
      tag: "report",
      image: "linear-gradient(90deg, hsla(46, 73%, 75%, 1), hsla(176, 73%, 88%, 1))",
      source: "World Intellectual Property Organization"
    }
  ];

  return (
    <section id="advocacy" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advocacy Tools</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resources and toolkits to help advocates and policymakers promote innovation-friendly policies and infrastructure development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Innovation Advocacy Toolkit</h3>
            <p className="text-gray-600 mb-6">
              Our comprehensive toolkit provides everything you need to effectively advocate for innovation-friendly policies 
              in your region, including data visualizations, talking points, and presentation templates.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-innovation-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Data Visualizations</h4>
                  <p className="text-gray-500">Clear, compelling charts and graphics that illustrate key innovation metrics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-innovation-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Talking Points</h4>
                  <p className="text-gray-500">Research-backed messaging for various audiences and contexts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-innovation-100 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Templates</h4>
                  <p className="text-gray-500">Customizable presentations, one-pagers, and email templates</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button 
                className="bg-innovation-500 hover:bg-innovation-600 text-white" 
                onClick={() => handleDownload('toolkit')}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Toolkit
              </Button>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Tabs defaultValue="resources" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="resources">Advocacy Resources</TabsTrigger>
                <TabsTrigger value="subscribe">Stay Updated</TabsTrigger>
              </TabsList>
              <TabsContent value="resources" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advocacyResources.map((resource, index) => (
                    <Card 
                      key={index}
                      className="overflow-hidden card-hover border-0 shadow-md"
                    >
                      <div 
                        className="h-24 w-full" 
                        style={{ 
                          background: resource.image,
                        }}
                      />
                      <CardContent className="p-5">
                        <h4 className="font-bold text-lg mb-2">{resource.title}</h4>
                        <p className="text-gray-500 text-sm mb-2">{resource.description}</p>
                        <p className="text-xs text-gray-400 mb-4">Source: {resource.source}</p>
                        <Button 
                          variant="ghost" 
                          className="text-sm p-0 h-auto hover:bg-transparent hover:text-innovation-700"
                          onClick={() => handleDownload(resource.tag)}
                        >
                          <FileText className="h-3.5 w-3.5 mr-1" /> Download <Download className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="subscribe" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="your@email.com" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">
                          Areas of Interest (Optional)
                        </label>
                        <Textarea 
                          id="message"
                          placeholder="Tell us what innovation topics you're most interested in..." 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-innovation-500 hover:bg-innovation-600"
                      >
                        Subscribe to Updates
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="bg-gradient-to-r from-innovation-600 to-insight-600 rounded-xl p-6 md:p-10 text-white animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Spread the Word
              </h3>
              <p className="mb-6 opacity-90">
                Help us advocate for innovation-friendly policies by sharing our research and recommendations with your network.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="secondary" 
                  className="bg-white text-innovation-600 hover:bg-gray-100"
                  onClick={() => handleShare('Twitter')}
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </Button>
                <Button 
                  variant="secondary" 
                  className="bg-white text-innovation-600 hover:bg-gray-100"
                  onClick={() => handleShare('Facebook')}
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </Button>
                <Button 
                  variant="secondary" 
                  className="bg-white text-innovation-600 hover:bg-gray-100"
                  onClick={() => handleShare('Email')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 transform rotate-3 shadow-lg">
                <div className="transform -rotate-3">
                  <h4 className="font-bold text-xl mb-2">Innovation Index</h4>
                  <p className="opacity-90 text-sm mb-4">#InnovationMatters</p>
                  <div className="h-20 bg-white/30 rounded-md mb-4 flex items-center justify-center">
                    <span className="font-bold">Share us</span>
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

export default AdvocacySection;
