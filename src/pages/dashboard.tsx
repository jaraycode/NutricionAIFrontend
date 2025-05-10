import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";
import { ProgressCircle } from "../components/progressCircle.tsx";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const api_url = import.meta.env.VITE_API_URL;

type Meal = {
  datetime: string;
  foodname: string;
  mass: number;
  kcal: number;
  proteins: number;
  fat: number;
};

function Dashboard() {
  const navigate = useNavigate();

  const [dailyCalories, setDailyCalories] = useState(0);
  const [dailyProteins, setDailyProteins] = useState(0);
  const [dailyFats, setDailyFats] = useState(0);

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [dailyUserCalories, setDailyUserCalories] = useState<number>(0);
  const [dailyUserProteins, setDailyUserProteins] = useState<number>(0);
  const [dailyUserFats, setDailyUserFats] = useState<number>(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    } else {
      const email = JSON.parse(user).email;
      fetchMeals(email);
      fetchUserData(email); // Fetch the user data based on email
    }
  }, [navigate]);

  const fetchMeals = async (email: string) => {
    try {
      const response = await fetch(`${api_url}/foods/${email}`);
      if (!response.ok) {
        throw new Error("No se pudieron obtener los alimentos.");
      }
      const data = await response.json();
      console.log(data); // Verifica si los datos se reciben correctamente
      setMeals(data);
      calculateDailyMetrics(data);
    } catch (err) {
      setError("Hubo un problema al obtener los alimentos.");
    } finally {
      setLoading(false);
    }
  };

  const calculateDailyMetrics = (meals: Meal[]) => {
    const today = new Date().toISOString().split("T")[0];
    const filteredMeals = meals.filter((meal) => meal.datetime && meal.datetime.startsWith(today));
  
    const total = filteredMeals.reduce(
      (acc, meal) => ({
        mass: acc.mass + (isNaN(meal.mass) ? 0 : parseFloat(meal.mass.toString())),
        kcal: acc.kcal + (isNaN(meal.kcal) ? 0 : parseFloat(meal.kcal.toString())),
        proteins: acc.proteins + (isNaN(meal.proteins) ? 0 : parseFloat(meal.proteins.toString())),
        fat: acc.fat + (isNaN(meal.fat) ? 0 : parseFloat(meal.fat.toString())),
      }),
      { mass: 0, kcal: 0, proteins: 0, fat: 0 }
    );
  
    setDailyCalories(total.kcal);  // Verifica si este total es correcto
    setDailyProteins(total.proteins);
    setDailyFats(total.fat);
    console.log("Calorías consumidas hoy:", total.kcal);  // Asegúrate de ver la salida aquí
  };
  
  const fetchUserData = async (email: string) => {
    try {
      const response = await fetch(`${api_url}/user/${email}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      console.log
      setDailyUserCalories(parseFloat(data.kcalxday) || 0);
      setDailyUserProteins(parseFloat(data.proteinxday) || 0);
      setDailyUserFats(parseFloat(data.fatxday) || 0);
      console.log("calories", dailyUserCalories)
    } catch (error) {
      console.error(error);
    }
  };

  const calculatePercentage = (consumed: number, goal: number): number => {
    console.log("Consumed:", consumed, "Goal:", goal);  // Verifica si los valores son correctos
    if (goal === 0 || consumed === 0) return 0; // Asegúrate de que no haya división por 0
    return Math.min((consumed / goal) * 100, 100); // Asegúrate de que no supere 100%
  };
  const progress = calculatePercentage(dailyCalories, dailyUserCalories);
console.log("Porcentaje de calorías consumidas:", progress);  // Verifica si el porcentaje es correcto


  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div className="ml-1/3 p-4 bg-black-100 min-h-screen"></div>
      <div
        style={{
          marginTop: "5.75rem",
          marginLeft: "15.32rem",
          zIndex: 2,
          position: "absolute",
          top: "0",
          left: "0",
          width: "calc(100% - 25.32rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "calc(100vh - 5.75rem)",
          paddingBottom: "2rem",
        }}
      >
        <h3
          className="text-h3-bold font-bold text-primary-darkGreen"
          style={{ alignSelf: "flex-start" }}
        >
          Estadísticas del Día
        </h3>

        {/* Cards Section */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
            width: "60%",
          }}
        >
          {/* Calorias Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "0.35rem",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "1.25rem",
            }}
          >
            <h4>Calorias (Kcal)</h4>
            <p style={{ color: "red", fontSize: "50px", fontWeight: "bold" }}>
              {dailyCalories}
            </p>
          </div>
          {/* Grasas Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "0.35rem",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "1.25rem",
            }}
          >
            <h4>Grasas (gr)</h4>
            <p style={{ color: "green", fontSize: "50px", fontWeight: "bold" }}>
              {dailyFats}
            </p>
          </div>
          {/* Proteinas Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "0.35rem",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "1.25rem",
            }}
          >
            <h4>Proteinas (gr)</h4>
            <p style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}>
              {dailyProteins}
            </p>
          </div>
        </section>

        {/* Progress Circles Section */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            marginBottom: "2.5rem",
            width: "60%",
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: "1.25rem",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {/* Calorias Progress Circle */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              variant={"error"}
              value={calculatePercentage(dailyCalories, dailyUserCalories)}
              radius={70}
              strokeWidth={20}
              className="mx-auto"
            >
              <span>Calorias</span>
            </ProgressCircle>
          </div>
          {/* Grasas Progress Circle */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressCircle
              variant={"success"}
              value={Math.min((dailyFats / dailyUserFats) * 100, 100)}
              radius={70}
              strokeWidth={20}
              className="mx-auto"
            >
              <span>Grasas</span>
            </ProgressCircle>
          </div>
          {/* Proteinas Progress Circle */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "100%",
              width: "100%", // Evitar que el div se quede demasiado pequeño
              flexWrap: "wrap", // Asegurarse que el contenido se ajuste sin cortar
            }}
          >
            <ProgressCircle
              variant={"default"}
              value={Math.min((dailyProteins / dailyUserProteins) * 100, 100)}
              radius={70}
              strokeWidth={20}
              className="mx-auto"
            >
              <span>Proteinas</span>
            </ProgressCircle>
          </div>
        </section>
      </div>

      {/* Mobile Responsiveness Styles */}
      <style>{`
        @media (max-width: 768px) {
          .ml-1/3 {
            margin-left: 0;
          }
          div {
            width: 100% !important;
          }
          section {
            width: 100%;
          }
          .progress-section {
            display: block;
          }
          .progress-section div {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Dashboard;
