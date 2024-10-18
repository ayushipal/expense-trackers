import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

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
    <PieChart width={400} height={400}>
      <Pie data={data} nameKey="name" valueKey="value">
        {data.map((entry, index) => (
          <Cell key={index} fill="#8884d8" />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ExpenseSummary;