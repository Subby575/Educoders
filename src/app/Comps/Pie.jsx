"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Chemistry' },
            { id: 1, value: 35, label: 'Physics' },
            { id: 2, value: 20, label: 'Mathematics' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
