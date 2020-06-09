import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const WeatherGraph = () => {
  const data = [
    {
      time: '12am',
      name: '21°',
      temp: 21,
    },
    {
      time: '1am',
      name: '22°',
      temp: 22,
    },
    {
      time: '2am',
      name: '24°',
      temp: 24,
    },
    {
      time: '3am',
      name: '25°',
      temp: 25,
    },
    {
      time: '4am',
      name: '29°',
      temp: 29,
    },
    {
      time: '5am',
      name: '28°',
      temp: 28,
    },
    {
      time: '6am',
      name: '25°',
      temp: 25,
    },
    {
      time: '7am',
      name: '24°',
      temp: 25,
    },
    {
      time: '8am',
      name: '21°',
      temp: 21,
    },
    {
      time: '9am',
      name: '22°',
      temp: 22,
    },
    {
      time: '10am',
      name: '24°',
      temp: 24,
    },
    {
      time: '11am',
      name: '25°',
      temp: 25,
    },
    {
      time: '12pm',
      name: '29°',
      temp: 29,
    },
    {
      time: '1pm',
      name: '28°',
      temp: 28,
    },
    {
      time: '2pm',
      name: '25°',
      temp: 25,
    },
    {
      time: '3pm',
      name: '24°',
      temp: 25,
    },
    {
      time: '4pm',
      name: '21°',
      temp: 21,
    },
    {
      time: '5pm',
      name: '22°',
      temp: 22,
    },
    {
      time: '6pm',
      name: '24°',
      temp: 24,
    },
    {
      time: '7pm',
      name: '25°',
      temp: 25,
    },
    {
      time: '8pm',
      name: '29°',
      temp: 29,
    },
    {
      time: '9pm',
      name: '28°',
      temp: 28,
    },
    {
      time: '10pm',
      name: '25°',
      temp: 25,
    },
    {
      time: '11pm',
      name: '24°',
      temp: 24,
    },
  ];
  return (
    <LineChart
      width={1200}
      height={135}
      data={data}
      margin={{ top: 5, right: 16, left: 18, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray='0 0' horizontal={false} stroke='#e0e0e0' />
      <XAxis
        dataKey='name'
        xAxisId={0}
        interval='preserveStartEnd'
        axisLine={false}
        tickLine={false}
        tickSize={0}
        tickMargin={10}
        stroke='#2e2e2e'
        tick={{ fontSize: '13px', fontWeight: 'bold' }}
      />
      <XAxis
        dataKey='time'
        xAxisId={1}
        interval={0}
        axisLine={false}
        tickLine={false}
        tickSize={0}
        tickMargin={-2}
        stroke='#8e8e8e'
        padding={{ left: 0 }}
        tick={{ fontSize: '13px', fontFamily: 'Montserrat' }}
      />
      <YAxis hide={true} domain={[15, 35]} />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      {/* padding={{ bottom: -50 }} */}
      <Line type='monotone' strokeWidth={2} dataKey='temp' stroke='#34aaf6' />
    </LineChart>
  );
};

export default WeatherGraph;
