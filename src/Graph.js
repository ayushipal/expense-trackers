import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const Graph = ({ expenses }) => {
  const data = expenses.map((expense) => ({
    name: expense.category,
    value: expense.amount,
  }));

  return (
    <div className="graph-container">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.name === 'Food' ? '#ff69b4' : '#8884d8'} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Graph;