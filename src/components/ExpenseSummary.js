import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

// Define a mapping of categories to colors
const categoryColors = {
  Food: '#ff69b4',
  Transport: '#4CAF50',
  Entertainment: '#2196F3',
  Utilities: '#FF9800',
  Others: '#9E9E9E',
};

const ExpenseSummary = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const category = acc.find((item) => item.name === expense.category);
    if (category) {
      category.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie data={data} nameKey="name" valueKey="value">
          {data.map((entry, index) => (
            <Cell key={index} fill={categoryColors[entry.name] || '#8884d8'} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseSummary;