"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <>
    {/* <p>Last 3 Test Record</p> */}
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Physics', 'Chemistry', 'Mathematics'] }]}
      series={[{ data: [7, 8, 5] }, { data: [3, 4, 9] }, { data: [2, 10, 6] }]}
      width={500}
      height={300}
    />
    </>
  );
}
