"use client";

import React from "react";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { name: "Applications", value: 24, color: "#4F46E5" },
  { name: "Wishlisted", value: 5, color: "#EF4444" },
  { name: "Interviews", value: 2, color: "#10B981" },
  { name: "Pending", value: 3, color: "#F59E0B" },
];

export function Chart() {
  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="flex flex-col h-full items-center justify-evenly">
      <CardHeader className="text-center">
        <CardTitle>Applications Overview</CardTitle>
        <CardDescription>Data for January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center min-h-min ">
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <Label
              value={`${total} Total `}
              position="center"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                fill: "#4B5563", // Tailwind gray-600
              }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2 text-sm justify-end h-full">
        <div className="text-muted-foreground">Total Applications in 6 months</div>
        <div className="text-muted-foreground">+10% from last period</div>
      </CardFooter>
    </Card>
  );
}
