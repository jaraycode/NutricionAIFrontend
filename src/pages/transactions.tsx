import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Meal = {
  datetime: string;
  foodname: string;
  mass: number;
  kcal: number;
  proteins: number;
  fat: number;
};

const Transactions: React.FC = () => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState<string>(today);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    } else {
      const email = JSON.parse(user).email;
      fetchMeals(email);
    }
  }, [navigate]);

  const fetchMeals = async (email: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/foods/${email}`
      );
      if (!response.ok) {
        throw new Error("No se pudieron obtener los alimentos.");
      }
      const data = await response.json();
      console.log(data); // Verifica si los datos se reciben correctamente
      setMeals(data);
      filterMealsByDate(new Date().toISOString().split("T")[0], data); // Filtrar comidas de la fecha actual
    } catch (err) {
      setError("Hubo un problema al obtener los alimentos.");
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    filterMealsByDate(selectedDate, meals);
  };

  const filterMealsByDate = (selectedDate: string, meals: Meal[]) => {
    const filtered = meals.filter((meal) => {
      if (meal.datetime && meal.datetime.startsWith(selectedDate)) {
        return true;
      }
      return false;
    });
    setFilteredMeals(filtered);
  };

  const total = filteredMeals.reduce(
    (acc, meal) => ({
      mass: acc.mass + (isNaN(meal.mass) ? 0 : parseFloat(meal.mass.toString())),
      kcal: acc.kcal + (isNaN(meal.kcal) ? 0 : parseFloat(meal.kcal.toString())),
      proteins: acc.proteins + (isNaN(meal.proteins) ? 0 : parseFloat(meal.proteins.toString())),
      fat: acc.fat + (isNaN(meal.fat) ? 0 : parseFloat(meal.fat.toString())),
    }),
    { mass: 0, kcal: 0, proteins: 0, fat: 0 }
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
                onChange={handleDateChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="overflow-x-auto">
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
                  {filteredMeals.map((meal, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2">
                        {new Date(meal.datetime).toLocaleTimeString()}
                      </td>
                      <td className="px-4 py-2">{meal.foodname}</td>
                      <td className="px-4 py-2">{meal.mass}</td>
                      <td className="px-4 py-2">{meal.kcal}</td>
                      <td className="px-4 py-2">{meal.proteins}</td>
                      <td className="px-4 py-2">{meal.fat}</td>
                    </tr>
                  ))}
                  <tr className="font-bold text-green-700 bg-gray-100">
                    <td className="px-4 py-2">Total</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">
                      {Number(total.mass).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-red-600">
                      {Number(total.kcal).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-red-600">
                      {Number(total.proteins).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-red-600">
                      {Number(total.fat).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
