import React, { useState, useEffect } from "react";
import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";
import uploadIcon from "../assets/uploadIcon.svg";
import { useNavigate } from "react-router-dom";

const ai_url = import.meta.env.VITE_AI_URL;
const api_url = import.meta.env.VITE_API_URL;

type FoodNutrition = {
  [key: string]: {
    mass: number;
    calories: number;
    fat: number;
    protein: number;
    description: string;
  };
};

// Información nutricional por cada 100 gramos
const foodNutrition: FoodNutrition = {
  hamburger: {
    mass: 100,
    calories: 250,
    fat: 10,
    protein: 15,
    description:
      "Una hamburguesa es un sándwich que consiste en una o más hamburguesas cocidas de carne molida, generalmente de res, colocadas dentro de una rebanada de pan.",
  },
  pizza: {
    mass: 100,
    calories: 300,
    fat: 12,
    protein: 20,
    description:
      "La pizza consiste en una base circular de masa de pan horneada a la que se le añaden ingredientes variados.",
  },
  // Agregar más alimentos según sea necesario
};

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
    name: "",
    weight: 0,
    protein: 0,
    calories: 0,
    fats: 0,
    details: "",
  });
  const [showButtons, setShowButtons] = useState(false); // Estado para mostrar botones

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodWeight(e.target.value);
  };

  const handleUpload = async () => {
    if (file && foodWeight) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(`${ai_url}/predict/`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Error al enviar los datos");
        }

        const data = await response.json();
        console.log(data);

        if (data.food_name === "Not recognized") {
          alert(
            "No se reconoce el alimento. Por favor, intente con otra imagen."
          );
          setNutritionData({
            name: "",
            weight: 0,
            protein: 0,
            calories: 0,
            fats: 0,
            details: "",
          });
          setShowButtons(false); // Ocultar los botones cuando no se reconozca el alimento
          return;
        }

        // Realizar la regla de 3 en el frontend
        const foodName = data.food_name as keyof FoodNutrition;
        const foodInfo = foodNutrition[foodName];
        const weightInGrams = parseFloat(foodWeight as string);

        // Calcular los valores nutricionales según el peso
        const calories = (foodInfo.calories * weightInGrams) / foodInfo.mass;
        const fat = (foodInfo.fat * weightInGrams) / foodInfo.mass;
        const protein = (foodInfo.protein * weightInGrams) / foodInfo.mass;

        // Actualizar el estado con los datos nutricionales calculados
        setNutritionData({
          name: foodName as string,
          weight: weightInGrams,
          protein,
          calories,
          fats: fat,
          details: foodInfo.description,
        });
        setShowButtons(true); // Mostrar los botones al reconocer el alimento
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    } else {
      console.log("Por favor sube una imagen y un peso.");
    }
  };

  const handleSave = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const email = user.email;
    const dateTime = new Date().toISOString();

    try {
      const response = await fetch(`${api_url}/foods`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          foodName: nutritionData.name,
          dateTime,
          mass: nutritionData.weight,
          kcal: nutritionData.calories,
          fat: nutritionData.fats,
          proteins: nutritionData.protein,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar los datos");
      }

      alert("Datos guardados correctamente.");
      setShowButtons(false); // Ocultar los botones después de guardar
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  const handleCancel = () => {
    // Lógica para cancelar y restablecer el estado
    setNutritionData({
      name: "",
      weight: 0,
      protein: 0,
      calories: 0,
      fats: 0,
      details: "",
    });
    setFoodWeight(""); // Limpiar el peso
    setFile(null); // Limpiar el archivo
    setShowButtons(false); // Ocultar los botones al cancelar
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
            {nutritionData.name && nutritionData.weight > 0 && (
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
                {showButtons && (
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handleCancel}
                      className="py-2 px-4 bg-gray-300 text-gray-800 font-bold rounded-md hover:bg-gray-400"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSave}
                      className="py-2 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700"
                    >
                      Guardar
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scan;
