import "../index.css";
import Navbar from "../components/navbar";

function FAQs() {
  return (
    <>
      <div
        style={{
          height: "982px",
          backgroundImage: "url(src/assets/navbarBackground.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Navbar showButtons={false}/>
      </div>

      <div
        style={{
          marginTop: "10.75rem",
          marginLeft: "6.32rem",
          zIndex: 2,
          position: "absolute",
          top: "0",
          left: "0",
          width: "24.43rem",
        }}
      >
        <h3 className="text-h3-bold font-bold text-center">
          Preguntas Frecuentes
        </h3>
      </div>
    </>
  );
}

export default FAQs;
