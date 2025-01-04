import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";
import { ProgressCircle } from "../components/progressCircle.tsx";
import { BarChart } from "../components/barChart"

const chartdata = [
  {
    date: "Jan 23",
    Proteinas: 2890,
    Calorias: 2338,
  },
  {
    date: "Feb 23",
    Proteinas: 2756,
    Calorias: 2103,
  },
  {
    date: "Mar 23",
    Proteinas: 3322,
    Calorias: 2194,
  },
  {
    date: "Apr 23",
    Proteinas: 3470,
    Calorias: 2108,
  },
  {
    date: "May 23",
    Proteinas: 3475,
    Calorias: 1812,
  },
  {
    date: "Jun 23",
    Proteinas: 3129,
    Calorias: 1726,
  },
  {
    date: "Jul 23",
    Proteinas: 3490,
    Calorias: 1982,
  },
  {
    date: "Aug 23",
    Proteinas: 2903,
    Calorias: 2012,
  },
  {
    date: "Sep 23",
    Proteinas: 2643,
    Calorias: 2342,
  },
  {
    date: "Oct 23",
    Proteinas: 2837,
    Calorias: 2473,
  },
  {
    date: "Nov 23",
    Proteinas: 2954,
    Calorias: 3848,
  },
  {
    date: "Dec 23",
    Proteinas: 3239,
    Calorias: 3736,
  },
]



function Dashboard() {
  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div className=" ml-1/3 p-49 bg-black-100 min-h-screen"></div>
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
        }}
      >
        <h3 className="text-h3-bold font-bold text-primary-darkGreen " style={{alignSelf: "flex-start"}}>
          Estadísticas del Día
        </h3>

        <section style={{
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
            <p style={{color:"red", fontSize:"50px", fontWeight:"bold"}}>3000</p>
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
            <p style={{color:"green", fontSize:"50px", fontWeight:"bold"}}>150</p>
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
            <p style={{color:"blue", fontSize:"50px", fontWeight:"bold"}}>100</p>
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
          <div>
            <ProgressCircle variant={"error"} value={81} radius={80} strokeWidth={20} className="mx-auto">
              <span>Calorias</span>
            </ProgressCircle>
          </div>
          <div>
            <ProgressCircle variant={"success"} value={22} radius={80} strokeWidth={20} className="mx-auto">
              <span>Grasas</span>
            </ProgressCircle>
          </div>
          <div>
            <ProgressCircle variant={"default"} value={62} radius={80} strokeWidth={20} className="mx-auto">
              <span>Proteinas</span>
            </ProgressCircle>
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
          <BarChart
            className="h-80"
            data={chartdata}
            index="date"
            type="stacked"
            colors={["darkGreen", "lightGreen"]}
            categories={["Proteinas", "Calorias"]}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </section>
      </div>
    </>
  );
}

export default Dashboard;