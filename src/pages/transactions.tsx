import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Meal {
  time: string;
  name: string;
  weight: number;
  calories: number;
  protein: number;
  fats: number;
}

function Transactions() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);
  
  const [date, setDate] = useState<string>("");

  const meals: Meal[] = [
    {
      time: "08:00",
      name: "Pan",
      weight: 30,
      calories: 120,
      protein: 1,
      fats: 1,
    },
    {
      time: "13:00",
      name: "Hamburguesa",
      weight: 450,
      calories: 2000,
      protein: 150,
      fats: 100,
    },
    {
      time: "16:00",
      name: "Pie de Manzana",
      weight: 100,
      calories: 300,
      protein: 5,
      fats: 20,
    },
    {
      time: "18:00",
      name: "Arepa",
      weight: 60,
      calories: 120,
      protein: 10,
      fats: 10,
    },
  ];

  const total = meals.reduce(
    (acc, meal) => ({
      weight: acc.weight + meal.weight,
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      fats: acc.fats + meal.fats,
    }),
    { weight: 0, calories: 0, protein: 0, fats: 0 }
  );
  return (
    <div>
      <Navbar2 />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-[4.125rem] bg-black-100 min-h-screen flex items-center">
          <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-primary-darkGreen">
              Registro Nutricional
            </h1>
            <div className="mb-4">
              <label
                htmlFor="date-picker"
                className="block text-sm font-medium mb-2"
              >
                Selecciona una fecha
              </label>
              <input
                type="date"
                id="date-picker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="px-4 py-2">Hora</th>
                  <th className="px-4 py-2">Comida</th>
                  <th className="px-4 py-2">Masa (gr)</th>
                  <th className="px-4 py-2">Calorías (kcal)</th>
                  <th className="px-4 py-2">Proteínas (gr)</th>
                  <th className="px-4 py-2">Grasas (gr)</th>
                </tr>
              </thead>
              <tbody>
                {meals.map((meal, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-2">{meal.time}</td>
                    <td className="px-4 py-2">{meal.name}</td>
                    <td className="px-4 py-2">{meal.weight}</td>
                    <td className="px-4 py-2">{meal.calories}</td>
                    <td className="px-4 py-2">{meal.protein}</td>
                    <td className="px-4 py-2">{meal.fats}</td>
                  </tr>
                ))}
                <tr className="font-bold text-green-700 bg-gray-100">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2"></td>
                  <td className="px-4 py-2">{total.weight}</td>
                  <td className="px-4 py-2 text-red-600">{total.calories}</td>
                  <td className="px-4 py-2 text-red-600">{total.protein}</td>
                  <td className="px-4 py-2 text-red-600">{total.fats}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
