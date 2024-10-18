import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const categoryColors = {
  Food: '#ff69b4',
  Transport: '#4CAF50',
  Entertainment: '#2196F3',
  Utilities: '#FF9800',
  Others: '#9E9E9E',
};

const ExpenseTrends = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const category = acc.find((item) => item.name === expense.category);
    if (category) {
      category.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []).sort((a, b) => b.value - a.value);

  return (
    <div>
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={index} fill={categoryColors[entry.name] || '#8884d8'} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ExpenseTrends;