import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";
import { ProgressCircle } from "../components/progressCircle.tsx";
import { BarChart } from "../components/barChart"
import React, { useEffect, useState } from "react";

// const chartdata = [
//   {
//     date: "Jan 23",
//     Proteinas: 2890,
//     Calorias: 2338,
//   },
//   {
//     date: "Feb 23",
//     Proteinas: 2756,
//     Calorias: 2103,
//   },
//   {
//     date: "Mar 23",
//     Proteinas: 3322,
//     Calorias: 2194,
//   },
//   {
//     date: "Apr 23",
//     Proteinas: 3470,
//     Calorias: 2108,
//   },
//   {
//     date: "May 23",
//     Proteinas: 3475,
//     Calorias: 1812,
//   },
//   {
//     date: "Jun 23",
//     Proteinas: 3129,
//     Calorias: 1726,
//   },
//   {
//     date: "Jul 23",
//     Proteinas: 3490,
//     Calorias: 1982,
//   },
//   {
//     date: "Aug 23",
//     Proteinas: 2903,
//     Calorias: 2012,
//   },
//   {
//     date: "Sep 23",
//     Proteinas: 2643,
//     Calorias: 2342,
//   },
//   {
//     date: "Oct 23",
//     Proteinas: 2837,
//     Calorias: 2473,
//   },
//   {
//     date: "Nov 23",
//     Proteinas: 2954,
//     Calorias: 3848,
//   },
//   {
//     date: "Dec 23",
//     Proteinas: 3239,
//     Calorias: 3736,
//   },
// ]



const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [progressData, setProgressData] = useState({
    caloriasMeta: 0,
    caloriasConsumidas: 0,
    grasasMeta: 0,
    grasasConsumidas: 0,
    proteinasMeta: 0,
    proteinasConsumidas: 0,
  });

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/chartdata");
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    const fetchProgressData = async () => {
      try {
        const response = await fetch("https://api.example.com/progressdata");
        const data = await response.json();
        setProgressData(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
    fetchProgressData();
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  // Calcular los valores de los ProgressCircle
  const caloriasValue = (progressData.caloriasConsumidas / progressData.caloriasMeta) * 100;
  const grasasValue = (progressData.grasasConsumidas / progressData.grasasMeta) * 100;
  const proteinasValue = (progressData.proteinasConsumidas / progressData.proteinasMeta) * 100;

  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div className=" ml-1/3 p-49 bg-black-100 min-h-screen"></div>
      <div
        style={{
          marginTop: "5.75rem",
          marginLeft: "20.32rem",
          zIndex: 2,
          position: "absolute",
          top: "0",
          left: "0",
          width: "calc(100% - 25.32rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "calc(100vh - 5.75rem)",
        }}
      >
        <h3 className="text-h3-bold font-bold text-primary-darkGreen " style={{alignSelf: "flex-start"}}>
          Estadísticas del Día
        </h3>

        <section className="Metas" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          width: "60%",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "0.35rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: "1.25rem",
          }}>
            <h4>
              Calorias (Kcal)
            </h4>
            <p style={{color:"red", fontSize:"50px", fontWeight:"bold"}}>{progressData.caloriasMeta}</p>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "0.35rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: "1.25rem",
          }}>
            <h4>
              Grasas (gr)
            </h4>
            <p style={{color:"green", fontSize:"50px", fontWeight:"bold"}}>{progressData.grasasMeta}</p>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "0.35rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            padding: "1.25rem",
          }}>
            <h4>
              Proteinas (gr)
            </h4>
            <p style={{color:"blue", fontSize:"50px", fontWeight:"bold"}}>{progressData.proteinasMeta}</p>
          </div>
        </section>

        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginBottom: "2.5rem",
          width: "60%",
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: "1.25rem",
        }}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <ProgressCircle variant={"error"} value={caloriasValue} radius={80} strokeWidth={20} className="mx-auto">
              <span>Calorias</span>
            </ProgressCircle>
            <p style={{marginTop: "1rem"}}>{progressData.caloriasConsumidas} de {progressData.caloriasMeta}</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <ProgressCircle variant={"success"} value={grasasValue} radius={80} strokeWidth={20} className="mx-auto">
              <span>Grasas</span>
            </ProgressCircle>
            <p style={{marginTop: "1rem"}}>{progressData.grasasConsumidas} de {progressData.grasasMeta}</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <ProgressCircle variant={"default"} value={proteinasValue} radius={80} strokeWidth={20} className="mx-auto">
              <span>Proteinas</span>
            </ProgressCircle>
            <p style={{marginTop: "1rem"}}>{progressData.proteinasConsumidas} de {progressData.proteinasMeta}</p>
          </div>
        </section>

        <section style={{
          width: "90%",
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: "1.25rem",
          marginBottom: "2.5rem",
        }}>
          <p style={{marginLeft:"2.5rem", fontWeight:"bold"}}>Valores nutricionales de la semana</p>
          <BarChart
            className="h-80"
            data={chartData}
            index="date"
            type="stacked"
            colors={["darkGreen", "lightGreen"]}
            categories={["Proteinas", "Calorias"]}
            valueFormatter={(number: number) =>
              `${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </section>
      </div>
    </>
  );
}

export default Dashboard;