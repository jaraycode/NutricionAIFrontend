import "../index.css";
import Navbar2 from "../components/navbar2.tsx";
import Sidebar from "../components/sidebar";

function Dashboard() {
  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div className="ml-1/3 p-49 bg-black-100 min-h-screen"></div>

      <div
        style={{
          marginTop: "5.75rem",
          marginLeft: "15.32rem",
          zIndex: 2,
          position: "absolute",
          top: "0",
          left: "0",
          width: "24.43rem",
        }}
      >
        <h3 className="text-h3-bold font-bold text-primary-darkGreen ">
          Estadísticas del Día
        </h3>
      </div>
    </>
  );
}

export default Dashboard;