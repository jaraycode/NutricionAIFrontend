import React, { useState, useEffect } from "react";
import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";
import uploadIcon from "../assets/uploadIcon.svg";
import { useNavigate } from "react-router-dom";

function Scan() {

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);


  const [file, setFile] = useState<File | null>(null);
  const [foodWeight, setFoodWeight] = useState<string>("");
  const [nutritionData, setNutritionData] = useState({
    name: "Hamburguesa",
    weight: 400,
    protein: 450,
    calories: 2000,
    fats: 100,
    details:
      "Una hamburguesa es un sándwich que consiste en una o más hamburguesas cocidas de carne molida, generalmente de res, colocadas dentro de una rebanada de pan.",
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodWeight(e.target.value);
  };

  const handleUpload = () => {
    // Aquí puedes manejar el procesamiento del archivo y el peso del alimento
    console.log("Archivo cargado:", file);
    console.log("Peso del alimento:", foodWeight);
    // Puedes llamar a tu API para obtener información nutricional aquí.
  };
  return (
    <div>
      <Navbar2 />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-[4.125rem] bg-black-100 min-h-screen flex items-center">
          <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-primary-darkGreen">
              Escanea un Alimento
            </h1>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-lg border border-dashed border-gray-400 cursor-pointer"
                >
                  <img
                    src={uploadIcon}
                    alt="Upload Icon"
                    className="w-full h-full text-gray-500"
                  />
                </label>
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <p className="text-sm text-gray-500">
                  {file ? file.name : "Ningún archivo ha sido cargado"}
                </p>
              </div>
              <div>
                <label
                  htmlFor="food-weight"
                  className="block text-sm font-medium"
                >
                  Masa del alimento en gramos
                </label>
                <input
                  type="number"
                  id="food-weight"
                  value={foodWeight}
                  onChange={handleWeightChange}
                  placeholder="0.00"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                onClick={handleUpload}
                className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none"
              >
                Cargar
              </button>
            </div>
            <div className="mt-6 p-4 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-center text-green-700">
                Información Nutricional
              </h2>
              <h3 className="text-lg font-bold text-center mt-2">
                {nutritionData.name} {nutritionData.weight}gr
              </h3>
              <div className="mt-4 grid grid-cols-3 text-center font-medium bg-secondary-lightGreen">
                <div>
                  <p>Proteína</p>
                  <p className="text-green-600">{nutritionData.protein}g</p>
                </div>
                <div>
                  <p>Calorías</p>
                  <p className="text-green-600">
                    {nutritionData.calories} kcal
                  </p>
                </div>
                <div>
                  <p>Grasas</p>
                  <p className="text-green-600">{nutritionData.fats}g</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">
                {nutritionData.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scan;
