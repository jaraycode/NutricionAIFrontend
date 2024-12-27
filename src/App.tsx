import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import "./index.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          height: "1620px",
          backgroundImage: "url(src/assets/homeRectangle.svg)",
          backgroundRepeat: "no-repeat",
   
        }}
      >
        <Navbar showButtons={true} />
        <div
            style={{
              display: "grid",
              placeItems: "center",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginTop: "6rem",
                }}
              >
                <span style={{ color: "red", fontSize: "3rem"}}>¡Comer</span> <span style={{ color: "green", fontSize: "3rem"}}>sano</span> <p>jamás había sido tan facil!</p>
              </h3>

              <p
                style={{
                  fontFamily: "Open Sans",
                  textAlign: "justify",
                  marginTop: "2rem",
                  fontSize: "p1-regular",
                }}
              >
                Mantener una buena salud 
                <p>debería ser la prioridad de todos</p>
              </p>
              <button  
              style={{
                backgroundColor: "darkgreen",
                marginTop: "2rem",
                padding: "0.25rem 2.6rem",
                borderRadius: "0.5rem",
                color: "white",
                transition: "background-color 0.3s ease"
              }} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "green"} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "darkgreen"} 
              onClick={() => navigate("/signin")}>
                Registrarse
              </button>
            </div>
            <div>
              <img
                src="src/assets/man_eating.svg"
                alt="manEating"
                style={{ 
                  width: "80%", 
                  marginTop: "10rem", 
                  justifySelf: "center" 
                }}
              />
            </div>
          </div>
          <div 
            style={{
              display: "grid",
              placeItems: "center",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}>
            <div>
              <img
                src="src/assets/man_phone.svg"
                alt="manPhone"
                style={{ width: "80%", marginTop: "20rem", justifySelf: "center",marginBottom: "10rem"}}
              />
            </div>
            <div>
              <h3 style={{
                  fontFamily: "Open Sans",
                  fontSize: "h2-bold",
                  fontWeight: "bold",
                  marginTop: "6rem",
                }}>
                <p style={{ color: "green"}}>¡Lleva</p> <p style={{ color: "green"}}>registro de</p> <span style={{ color: "green"}}>tus</span> <span style={{ color: "red"}}>calorías!</span>
              </h3>
              <p style={{
                  fontFamily: "Open Sans",
                  textAlign: "justify",
                  marginTop: "2rem",
                  fontSize: "p3-regular",
                  }}>
                Con grandiosas herramientas tú <br/>puedes llevar registro de los valores<br/> nutricionales de los alimentos que consumes
              </p>
            </div>
          </div>
      </div>
      <footer style={{
        backgroundColor: "lightgreen",
        textAlign: "center",
        padding: "1rem",
        position: "relative",
        bottom: "0",
        width: "100%",
        fontSize: "p1-bold"
      }}> 
        Copyright © 2024 NutricionIA. Todos los derechos reservados. 
      </footer>
    </>
  );
}

export default App;