import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function DashboardPage() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders").then(async res => {
      const orders = res.data;
      const itemCounts = {};
      const menuRes = await axios.get("http://localhost:5000/api/menu");
      const menuMap = {};
      menuRes.data.forEach(item => {
        menuMap[item._id] = item.name;
      });

      orders.forEach(order => {
        order.items.forEach(i => {
          const name = menuMap[i.itemId] || i.itemId;
          itemCounts[name] = (itemCounts[name] || 0) + i.quantity;
        });
      });

      setChartData({
        labels: Object.keys(itemCounts),
        datasets: [
          {
            label: "Most Ordered Items",
            data: Object.values(itemCounts),
            backgroundColor: "rgba(75, 192, 192, 0.6)"
          }
        ]
      });
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Bar data={chartData} />
    </div>
  );
}
