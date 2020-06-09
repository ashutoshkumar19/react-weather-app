import React, { useState, useLayoutEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const useGetWidth = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(document.getElementsByClassName('row-4')[0].offsetWidth);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
};

const SunriseGraph = () => {
  const data = [
    {
      name: '6am',
      day: -4,
      night: -4,
    },
    {
      name: '',
      day: 0,
      night: 0,
    },
    {
      name: '1pm',
      day: 12,
      night: 0,
    },
    {
      name: '',
      day: 0,
      night: 0,
    },
    {
      name: '8pm',
      day: -4,
      night: -4,
    },
  ];

  const width = useGetWidth();

  return (
    <ResponsiveContainer width='100%' height={width >= 576 ? 100 : 100}>
      <AreaChart
        width='100%'
        height='100%'
        data={data}
        stackOffset
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id='colorDay' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#ffe19d' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#ffe19d' stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray='0 0' horizontal={false} vertical={false} />

        <XAxis
          dataKey='name'
          xAxisId={0}
          interval='preserveStartEnd'
          tickSize={20}
          tickMargin={8}
          stroke='#aeaeae'
          tick={{ fontSize: '14px' }}
        />

        <YAxis padding={{ bottom: -25 }} domain={[-6, 12]} hide />

        {/* <Tooltip /> */}
        {/* #ffebbe */}

        <Area
          type='monotone'
          dataKey='day'
          stroke='#efb837'
          fillOpacity={1}
          fill='url(#colorDay)'
        />
        {/* <Area type='monotone' dataKey='night' stroke='#636562' fill='#636562' /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SunriseGraph;

// import React, { useState, useEffect, useLayoutEffect } from 'react';

// const useGetWidth = () => {
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     function updateSize() {
//       setWidth(document.getElementById('graph-container').offsetWidth);
//     }

//     window.addEventListener('resize', updateSize);
//     updateSize();

//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return width;
// };

// const SunriseGraph = () => {
//   const containerWidth = useGetWidth();

//   const calcHeight = (x) => {
//     const h = containerWidth / 2;
//     const k = 60;
//     const p = -h / 2;
//     let y = 0;
//     y = [-((x - h) * (x - h)) / (4 * p)] + k;
//     return k - y;
//   };

//   const [array, setArray] = useState([]);

//   useEffect(() => {
//     let temp = [];
//     for (let i = 0; i < containerWidth; i++) {
//       temp.push(i);
//     }
//     setArray(temp);
//   }, [containerWidth]);

//   useEffect(() => {
//     array.forEach((element) => {
//       console.log(calcHeight(element));
//     });
//   }, [array]);

//   return (
//     <div className='graph-container' id='graph-container'>
//       {array.map((value, key) => (
//         <div key={key} style={{ height: `${calcHeight(value)}px` }}></div>
//       ))}
//     </div>
//   );
// };

// export default SunriseGraph;
