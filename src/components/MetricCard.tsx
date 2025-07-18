
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const MetricCard = ({
  title,
  value,
  description,
  trend = 'neutral',
  trendValue,
  icon,
  className,
  style
}: MetricCardProps) => {
  const trendColor = trend === 'up' 
    ? 'text-green-500' 
    : trend === 'down' 
      ? 'text-red-500' 
      : 'text-gray-500';
  
  return (
    <Card className={cn("overflow-hidden card-hover", className)} style={style}>
      <CardHeader className="flex flex-row items-center justify-between p-6">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        {icon && (
          <div className="bg-primary/10 p-2 rounded-full">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-muted-foreground mt-2 text-sm">{description}</p>
        
        {trendValue && (
          <div className="mt-4 flex items-center">
            <div className={cn("flex items-center", trendColor)}>
              {trend === 'up' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              )}
              {trend === 'down' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              <span className="font-medium">{trendValue}</span>
              <span className="text-gray-500 text-xs ml-1">vs last period</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
